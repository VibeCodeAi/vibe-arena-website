import React from 'react';

function WhatIs() {
  return (
    <section id="what-is" className="cosmic-container relative">
      {/* Animated pixel grid background */}
      <div className="absolute inset-0 pixel-grid-animated opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <h2 className="section-title">
          <span className="text-cosmic-blue-light">Design the Fighter.</span>{' '}
          <span className="text-cosmic-orange-light">Command the Battle.</span>
        </h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="bg-cosmic-gray/40 backdrop-blur-sm p-8 rounded-lg border border-cosmic-blue-light/30 flex-1 relative overflow-hidden">
            {/* Corner pixel decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cosmic-blue-light/50"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cosmic-blue-light/50"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cosmic-blue-light/50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cosmic-blue-light/50"></div>
            
            <div className="relative z-10">
              <p className="text-xl mb-6 leading-relaxed font-cyber">
                In Vibe Arena, you don't control the character —{' '}
                <span className="text-cosmic-blue-light font-bold">you design the intelligence behind the character.</span>
              </p>
              
              <p className="text-xl mb-6 leading-relaxed font-cyber">
                You build agents: programmable golems that fight for you.{' '}
                Every battle tests your mind, not your reflexes.
              </p>
              
              <p className="text-xl font-bold text-cosmic-orange-light font-cyber">
                Victory belongs to the best-designed mind.
              </p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-blue-light to-cosmic-purple-light rounded-lg blur opacity-30"></div>
            <div className="relative aspect-square bg-cosmic-black/90 rounded-lg flex items-center justify-center overflow-hidden border-2 border-cosmic-blue-light/30">
              {/* Corner pixel decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-cosmic-blue-light"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-cosmic-blue-light"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 bg-cosmic-blue-light"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-cosmic-blue-light"></div>
              
              <div className="w-full h-full p-4 flex items-center justify-center">
                <div className="text-center relative">
                  {/* Static pattern in the background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-10 grid-rows-10 gap-1 w-full h-full">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`${Math.random() > 0.7 ? 'bg-cosmic-blue-light' : 'bg-transparent'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="font-pixel text-4xl mb-6 text-cosmic-blue-light tracking-widest">AI AGENT</div>
                    <div className="space-y-3 text-lg font-cyber">
                      <div className="flex justify-between items-center max-w-xs mx-auto px-4 py-1 border border-cosmic-blue-light/30 rounded bg-cosmic-black/50">
                        <span>Health:</span> <span className="text-cosmic-orange-light">30/30</span>
                      </div>
                      <div className="flex justify-between items-center max-w-xs mx-auto px-4 py-1 border border-cosmic-blue-light/30 rounded bg-cosmic-black/50">
                        <span>Mana:</span> <span className="text-cosmic-blue-light">10/10</span>
                      </div>
                      <div className="mt-8 font-cyber">
                        <div className="text-cosmic-purple-light uppercase tracking-wider text-sm mb-2">Available actions:</div>
                        <div className="text-left max-w-xs mx-auto mt-2 space-y-2">
                          <div className="px-3 py-1 border border-cosmic-blue-light/20 rounded bg-cosmic-black/50 flex justify-between">
                            <span>move left, right, act</span> <span className="text-cosmic-blue-light">AP1</span>
                          </div>
                          <div className="px-3 py-1 border border-cosmic-blue-light/20 rounded bg-cosmic-black/50 flex justify-between">
                            <span>cast fireball</span> <span className="text-cosmic-blue-light">AP4</span>
                          </div>
                          <div className="px-3 py-1 border border-cosmic-blue-light/20 rounded bg-cosmic-black/50 flex justify-between">
                            <span>cast summon golem</span> <span className="text-cosmic-blue-light">AP3</span>
                          </div>
                          <div className="px-3 py-1 border border-cosmic-blue-light/20 rounded bg-cosmic-black/50 flex justify-between">
                            <span>cast mine</span> <span className="text-cosmic-blue-light">AP2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cosmic-divider"></div>
    </section>
  );
}

export default WhatIs; 