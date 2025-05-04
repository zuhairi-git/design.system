/**
 * Show a toast notification when a color is copied to clipboard
 * @param message The message to display in the notification
 */
export function showNotification(message: string = 'Copied to clipboard!'): void {
  // Create notification element
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.className = 
    'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50' +
    ' bg-primary-500 text-white px-4 py-2 rounded-full shadow-lg' +
    ' text-sm font-medium opacity-0 transition-opacity duration-300';
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10);
  
  // Remove after timeout
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}
