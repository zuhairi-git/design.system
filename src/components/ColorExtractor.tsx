'use client';

import { useState, useRef } from 'react';
import NextImage from 'next/image';

interface ColorExtractorProps {
  title: string;
  description?: string;
}

export default function ColorExtractor({ title, description }: ColorExtractorProps) {  const [image, setImage] = useState<string | null>(null);
  const [colors, setColors] = useState<string[]>([]);
  const [extracting, setExtracting] = useState(false);
  // Removed unused state variables
  // const [isDragging, setIsDragging] = useState(false);
  // const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
          extractColors(event.target.result as string);
        }
      };
      
      reader.readAsDataURL(selectedFile);
    }
  };

  const extractColors = async (imgSrc: string) => {
    setExtracting(true);
    setColors([]);
    
    // Create a small delay to allow the UI to update
    setTimeout(() => {
      try {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        
        img.onload = () => {
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
              // Set canvas dimensions to match the image
              canvas.width = img.width;
              canvas.height = img.height;
              
              // Draw the image on the canvas
              ctx.drawImage(img, 0, 0);
              
              // Enhanced color extraction algorithm
              const colorCounts: Record<string, number> = {};
              const extractedColors: string[] = [];
              
              // Sample regions strategically
              // We'll sample a grid plus some focal points for better coverage
              
              // Create a grid of sample points
              const gridSize = 10;
              const xStep = img.width / gridSize;
              const yStep = img.height / gridSize;
              
              const positions: {x: number, y: number}[] = [];
              
              // Add grid points
              for (let x = 0; x < gridSize; x++) {
                for (let y = 0; y < gridSize; y++) {
                  positions.push({
                    x: (x + 0.5) * xStep, 
                    y: (y + 0.5) * yStep
                  });
                }
              }
              
              // Add focal points (center, corners, etc.)
              positions.push({ x: img.width * 0.5, y: img.height * 0.5 });  // center
              positions.push({ x: img.width * 0.25, y: img.height * 0.25 }); // top-left quadrant
              positions.push({ x: img.width * 0.75, y: img.height * 0.25 }); // top-right quadrant
              positions.push({ x: img.width * 0.25, y: img.height * 0.75 }); // bottom-left quadrant
              positions.push({ x: img.width * 0.75, y: img.height * 0.75 }); // bottom-right quadrant
              
              // Extract and quantize colors from the positions
              positions.forEach(({ x, y }) => {
                const pixel = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
                
                // Basic quantization to reduce similar colors
                const r = Math.round(pixel[0] / 10) * 10;
                const g = Math.round(pixel[1] / 10) * 10;
                const b = Math.round(pixel[2] / 10) * 10;
                
                const rgb = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                
                // Count color occurrences
                if (colorCounts[rgb]) {
                  colorCounts[rgb]++;
                } else {
                  colorCounts[rgb] = 1;
                  extractedColors.push(rgb);
                }
              });
              
              // Remove duplicate colors and limit to 10
              const uniqueColors = [...new Set(extractedColors)];
              setColors(uniqueColors.slice(0, 10));
            }
          }
          setExtracting(false);
        };
        
        img.src = imgSrc;
      } catch (error) {
        console.error('Error extracting colors:', error);
        setExtracting(false);
      }
    }, 100);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string);
          extractColors(event.target.result as string);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    // You could add a toast notification here
  };

  return (
    <div className="card p-6 space-y-4">
      <div className="space-y-2">
        <h3 className="font-heading font-bold text-xl text-neutral-950 dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="font-body text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
        )}
      </div>

      <div 
        className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          className="hidden" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        
        {!image ? (
          <div className="text-center space-y-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 mx-auto text-neutral-400 dark:text-neutral-600"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="font-body text-neutral-600 dark:text-neutral-400">
              Drag & drop an image or click to browse
            </p>
            <p className="text-sm font-body text-neutral-500 dark:text-neutral-500">
              The image will be processed locally and not uploaded anywhere
            </p>
          </div>
        ) : (          <div className="w-full">
            <NextImage 
              src={image} 
              alt="Uploaded"
              width={400}
              height={300} 
              className="max-h-64 mx-auto object-contain rounded-md"
              unoptimized // Since we're using a data URL
            />
          </div>
        )}
      </div>

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Extracted colors */}
      {extracting ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      ) : colors.length > 0 ? (
        <div className="space-y-4">
          <h4 className="font-heading font-medium text-lg text-neutral-900 dark:text-white">
            Extracted Colors
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">            {colors.map((color, index) => (              <div 
                key={index} 
                className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: color }}
              >                <div 
                  className="h-16 w-full relative flex items-center justify-center"
                  style={{ backgroundColor: color }}
                >
                  <span className="font-mono text-xs font-medium px-2 py-0.5 rounded bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-50 text-black dark:text-white">
                    {color}
                  </span>
                
                  <div 
                    className="absolute top-2 right-2 flex items-center justify-center cursor-pointer"
                    onClick={() => copyColor(color)}
                  >
                    <span 
                      className="material-icons bg-white dark:bg-neutral-800 rounded-full p-1 text-neutral-600 dark:text-neutral-300 hover:text-primary-500 transition-colors shadow-sm"
                      style={{ fontSize: '16px' }}
                    >
                      content_copy
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
