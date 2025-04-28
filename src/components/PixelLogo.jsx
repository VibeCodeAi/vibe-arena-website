import React from 'react';

// Pixel art logo component
export function PixelLogo() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-cosmic-blue-light/20 blur-md rounded-lg"></div>
      <div className="relative font-pixel text-2xl text-white inline-flex">
        <span className="text-cosmic-blue-light mr-1">VIBE</span>
        <span>ARENA</span>
      </div>
    </div>
  );
}
