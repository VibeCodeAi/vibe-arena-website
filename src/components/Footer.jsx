import React from 'react';
import { PixelLogo } from './PixelLogo';

// Link component with icon
function FooterLink({ href, icon, children }) {
  return (
    <li>
      <a href={href} className="hover:text-cosmic-blue-light transition-colors inline-flex items-center group">
        <i className={`${icon} mr-2 text-cosmic-blue-light/70 group-hover:text-cosmic-blue-light transition-colors`}></i>
        {children}
      </a>
    </li>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cosmic-black py-12 px-4 relative overflow-hidden">
      {/* Background pixel grid */}
      <div className="absolute inset-0 pixel-grid-animated opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between md:items-start">
          {/* Logo and tagline */}
          <div className="mb-12 md:mb-0">
            <PixelLogo />
            <div className="text-sm text-gray-400 font-cyber mt-2">Build the mind. Unleash the fighter.</div>
          </div>
          
          {/* Footer links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 md:flex md:space-x-16">
            <div className="text-sm">
              <div className="text-cosmic-blue-light mb-4 font-cyber uppercase tracking-wider text-xs">LINKS</div>
              <ul className="space-y-3 text-gray-400 font-cyber">
                <FooterLink href="#" icon="ph-fill ph-info">About</FooterLink>
                <FooterLink href="#" icon="ph-fill ph-article">Blog</FooterLink>
                <FooterLink href="#" icon="ph-fill ph-envelope">Contact</FooterLink>
              </ul>
            </div>
            
            <div className="text-sm">
              <div className="text-cosmic-blue-light mb-4 font-cyber uppercase tracking-wider text-xs">FOLLOW</div>
              <ul className="space-y-3 text-gray-400 font-cyber">
                <FooterLink href="#" icon="ph-fill ph-twitter-logo">Twitter</FooterLink>
                <FooterLink href="#" icon="ph-fill ph-discord-logo">Discord</FooterLink>
                <FooterLink href="#" icon="ph-fill ph-github-logo">GitHub</FooterLink>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer bottom section */}
        <div className="mt-12 pt-6 border-t border-cosmic-blue-light/10 flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500 font-cyber">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Vibe Arena. All rights reserved.
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6 items-center">
            <a href="#" className="hover:text-cosmic-blue-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cosmic-blue-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 