import type { Metadata } from "next";
import { Poppins, Roboto, Tajawal } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Google Font for Arabic content

export const metadata: Metadata = {
  title: "Design System Documentation",
  description: "Interactive design system documentation showcasing colors, typography, and components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="en">      <body
        className={`${poppins.variable} ${roboto.variable} ${tajawal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
