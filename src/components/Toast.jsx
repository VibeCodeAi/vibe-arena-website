import React, { useState, useEffect } from 'react';

export const ToastContext = React.createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success', duration = 5000) => {
    setToast({ message, type, duration });
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && <Toast toast={toast} onClose={hideToast} />}
    </ToastContext.Provider>
  );
}

function Toast({ toast, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, toast.duration);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  let bgColor = 'bg-cosmic-blue-light';
  if (toast.type === 'error') {
    bgColor = 'bg-red-500';
  } else if (toast.type === 'warning') {
    bgColor = 'bg-cosmic-orange-light';
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-blue-light via-cosmic-purple-light to-cosmic-orange-light rounded-lg blur opacity-75 animate-pulse-slow"></div>
        <div className={`relative ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg max-w-md backdrop-blur-sm border border-cosmic-blue-light/20`}>
          <div className="flex items-center justify-between">
            <p className="font-cyber">{toast.message}</p>
            <button 
              onClick={onClose}
              className="ml-4 text-white hover:text-gray-200 focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast; 