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
          <a href="#what-is" className="text-white hover:text-cosmic-blue-light transition-all duration-300 font-cyber uppercase tracking-wider text-sm hover:drop-shadow-[0_0_8px_rgba(43,93,255,0.6)]">Game</a>
          {/* <a href="#gameplay" className="text-white hover:text-cosmic-blue-light transition duration-200 font-cyber uppercase tracking-wider text-sm">Gameplay</a> */}
          <a href="#community" className="text-white hover:text-cosmic-blue-light transition-all duration-300 font-cyber uppercase tracking-wider text-sm hover:drop-shadow-[0_0_8px_rgba(43,93,255,0.6)]">Community</a>
          <a href="#final-cta" className="bg-cosmic-blue hover:bg-cosmic-blue-light py-2 px-5 rounded-lg text-white font-cyber uppercase tracking-wider text-sm transition-all duration-300 relative overflow-hidden group border border-cosmic-blue-light/20">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-blue-light transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`md:hidden absolute top-full left-0 right-0 bg-cosmic-black/95 backdrop-blur-md border-b border-cosmic-blue-light/20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col space-y-4 p-6">
            <a href="#what-is" className="text-white hover:text-cosmic-blue-light transition-all duration-300 font-cyber uppercase tracking-wider text-sm hover:drop-shadow-[0_0_8px_rgba(43,93,255,0.6)]" onClick={() => setIsMenuOpen(false)}>Game</a>
            {/* <a href="#gameplay" className="text-white hover:text-cosmic-blue-light transition duration-200 font-cyber uppercase tracking-wider text-sm" onClick={() => setIsMenuOpen(false)}>Gameplay</a> */}
            <a href="#community" className="text-white hover:text-cosmic-blue-light transition-all duration-300 font-cyber uppercase tracking-wider text-sm hover:drop-shadow-[0_0_8px_rgba(43,93,255,0.6)]" onClick={() => setIsMenuOpen(false)}>Community</a>
            <a href="#final-cta" className="bg-cosmic-blue hover:bg-cosmic-blue-light py-2 px-5 rounded-lg text-white font-cyber uppercase tracking-wider text-sm transition-all duration-300 relative overflow-hidden group border border-cosmic-blue-light/20 inline-block text-center" onClick={() => setIsMenuOpen(false)}>
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-blue-light transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header; 