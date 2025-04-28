import React from 'react';

function ArchitectSection() {
  return (
    <section className="cosmic-container py-20 relative overflow-hidden">
      {/* Pixel grid background */}
      <div className="absolute inset-0 pixel-grid-animated opacity-10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="section-title">
          <span className="text-cosmic-orange-light font-cyber">Embrace the Architect Within</span>
        </h2>
        
        <div className="mt-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-cosmic-blue-light via-cosmic-purple-light to-cosmic-red-light rounded-lg blur opacity-20"></div>
          <div className="relative bg-cosmic-gray/40 backdrop-blur-sm p-10 rounded-lg border border-cosmic-blue-light/30">
            {/* Corner pixel decorations */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cosmic-blue-light/50"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cosmic-blue-light/50"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-cosmic-blue-light/50"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cosmic-blue-light/50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-cosmic-blue-light pl-4">
                  <p className="text-xl leading-relaxed font-cyber">
                    <span className="font-bold text-cosmic-blue-light">You are the mage behind the golem.</span>
                    <br />
                    The unseen hand shaping the battlefield.
                  </p>
                </div>
                
                <div className="border-l-4 border-cosmic-blue-light pl-4">
                  <p className="text-xl leading-relaxed font-cyber">
                    <span className="font-bold text-cosmic-blue-light">You don't play. You build.</span>
                    <br />
                    <span className="font-bold text-cosmic-blue-light">You don't react. You predict.</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative w-full h-full max-h-60 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue-light/10 via-transparent to-cosmic-orange-light/10"></div>
                  <img 
                    src="/fighters.png" 
                    alt="Vibe Arena Fighters" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <div className="inline-block px-6 py-3 bg-cosmic-black/60 border border-cosmic-orange-light/30 rounded">
                <p className="text-xl font-bold text-cosmic-orange-light font-cyber">
                  In Vibe Arena, true power belongs to those who design better minds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cosmic-divider"></div>
    </section>
  );
}

export default ArchitectSection; 