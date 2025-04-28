import React, { useState } from 'react';
import { PixelLogo } from './PixelLogo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-cosmic-black/80 backdrop-blur-md py-5 px-6 fixed top-0 left-0 right-0 z-50 border-b border-cosmic-blue-light/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <PixelLogo />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#what-is" className="text-white hover:text-cosmic-blue-light transition duration-200 font-cyber uppercase tracking-wider text-sm">Game</a>
          <a href="#gameplay" className="text-white hover:text-cosmic-blue-light transition duration-200 font-cyber uppercase tracking-wider text-sm">Gameplay</a>
          <a href="#community" className="text-white hover:text-cosmic-blue-light transition duration-200 font-cyber uppercase tracking-wider text-sm">Community</a>
          <a href="#final-cta" className="cosmic-button py-2 px-5 font-cyber uppercase tracking-wider text-sm">Join Waitlist</a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cosmic-black/95 backdrop-blur-md p-6 flex flex-col space-y-5 border-b border-cosmic-blue-light/20">
            <a 
              href="#what-is" 
              className="text-white hover:text-cosmic-blue-light transition duration-200 py-2 font-cyber uppercase tracking-wide text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Game
            </a>
            <a 
              href="#gameplay" 
              className="text-white hover:text-cosmic-blue-light transition duration-200 py-2 font-cyber uppercase tracking-wide text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Gameplay
            </a>
            <a 
              href="#community" 
              className="text-white hover:text-cosmic-blue-light transition duration-200 py-2 font-cyber uppercase tracking-wide text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#final-cta" 
              className="cosmic-button w-full text-center py-3 font-cyber uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header; 