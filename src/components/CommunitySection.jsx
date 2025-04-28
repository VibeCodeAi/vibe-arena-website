import React from 'react';

// Pixel art style bullet
function PixelBullet() {
  return (
    <div className="mr-3 flex-shrink-0">
      <div className="w-4 h-4 bg-cosmic-blue-light relative">
        <div className="absolute top-1 left-1 w-2 h-2 bg-cosmic-black"></div>
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="cosmic-container">
      <h2 className="section-title">
        <span className="text-cosmic-purple-light">Join the Mob of Architects</span>
      </h2>
      
      <div className="mt-12 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <p className="text-xl mb-8 leading-relaxed font-cyber">
            Vibe Arena is more than a game — it's a gathering of the sharpest minds.
          </p>
          
          <ul className="space-y-6 text-lg">
            <li className="flex items-start">
              <PixelBullet />
              <span className="font-cyber">Early access tournaments</span>
            </li>
            <li className="flex items-start">
              <PixelBullet />
              <span className="font-cyber">Community rewards and secret badges</span>
            </li>
            <li className="flex items-start">
              <PixelBullet />
              <span className="font-cyber">Exclusive skins for your mages and towers</span>
            </li>
            <li className="flex items-start">
              <PixelBullet />
              <span className="font-cyber">Special events for the earliest summoners</span>
            </li>
          </ul>
          
          <p className="mt-10 text-xl font-cyber">
            <span className="text-cosmic-orange-light">Belong to the new frontier:</span>
            <br />
            where intelligence fights for glory.
          </p>
          
          <div className="mt-10">
            <a href="#final-cta" className="cosmic-button-orange font-cyber uppercase tracking-wider">
              JOIN THE WAITLIST
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-purple-light to-cosmic-orange-light rounded-lg blur opacity-30"></div>
          <div className="relative h-full bg-cosmic-gray/40 backdrop-blur-sm p-6 rounded-lg border border-cosmic-purple-light/30 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-cosmic-black/60 rounded-lg p-3 flex flex-col items-center justify-center border border-cosmic-purple-light/20 hover:border-cosmic-purple-light/60 transition-all duration-300">
                  <div className="w-16 h-16 mb-3 relative">
                    {/* Pixel art style icon */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                      {Array.from({ length: 16 }).map((_, index) => {
                        const isColored = 
                          i === 1 ? [0, 1, 4, 5, 9, 12, 13].includes(index) : 
                          i === 2 ? [0, 1, 4, 5, 6, 9, 10, 13, 14].includes(index) : 
                          i === 3 ? [2, 3, 6, 7, 8, 9, 10, 13, 14].includes(index) : 
                          [0, 3, 4, 7, 8, 11, 12, 15].includes(index);
                        
                        return (
                          <div 
                            key={index} 
                            className={`w-full h-full ${isColored ? 'bg-cosmic-blue-light' : 'bg-transparent'}`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="font-cyber text-sm text-center uppercase tracking-wider">{
                    i === 1 ? "Architect Badge" :
                    i === 2 ? "Tournament Access" :
                    i === 3 ? "Special Golems" :
                    "Cosmic Themes"
                  }</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-block px-4 py-2 bg-cosmic-black border border-cosmic-orange-light/50 text-cosmic-orange-light font-cyber text-sm uppercase tracking-wide">
                Early Access Rewards
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cosmic-divider"></div>
    </section>
  );
}

export default CommunitySection; 