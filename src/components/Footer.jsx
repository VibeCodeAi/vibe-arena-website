import React from 'react';

// Pixel art logo component
function PixelLogo() {
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

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cosmic-black py-12 px-4 relative overflow-hidden">
      {/* Background pixel grid */}
      <div className="absolute inset-0 pixel-grid-animated opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <PixelLogo />
            <div className="text-sm text-gray-400 font-cyber mt-2">Build the mind. Unleash the fighter.</div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
            <div className="text-sm">
              <div className="text-cosmic-blue-light mb-3 font-cyber uppercase tracking-wider text-xs">Links</div>
              <ul className="space-y-2 text-gray-400 font-cyber">
                <li>
                  <a href="#" className="hover:text-cosmic-blue-light transition-colors inline-flex items-center">
                    <div className="w-2 h-2 bg-cosmic-blue-light mr-2"></div>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cosmic-blue-light transition-colors inline-flex items-center">
                    <div className="w-2 h-2 bg-cosmic-blue-light mr-2"></div>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cosmic-blue-light transition-colors inline-flex items-center">
                    <div className="w-2 h-2 bg-cosmic-blue-light mr-2"></div>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-sm">
              <div className="text-cosmic-blue-light mb-3 font-cyber uppercase tracking-wider text-xs">Follow</div>
              <ul className="space-y-2 text-gray-400 font-cyber">
                <li>
                  <a href="#" className="hover:text-cosmic-blue-light transition-colors inline-flex items-center">
                    <div className="w-2 h-2 bg-cosmic-blue-light mr-2"></div>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cosmic-blue-light transition-colors inline-flex items-center">
                    <div className="w-2 h-2 bg-cosmic-blue-light mr-2"></div>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cosmic-blue-light transition-colors inline-flex items-center">
                    <div className="w-2 h-2 bg-cosmic-blue-light mr-2"></div>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-cosmic-blue-light/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-cyber">
          <div>
            &copy; {currentYear} Vibe Arena. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-cosmic-blue-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cosmic-blue-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 