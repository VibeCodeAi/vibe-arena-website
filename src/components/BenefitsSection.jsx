import React from 'react';

function BenefitItem({ text, icon }) {
  return (
    <div className="flex items-center mb-6 group">
      <div className="mr-4 flex-shrink-0 relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-cosmic-blue-light/10 group-hover:bg-cosmic-blue-light/20 transition-all duration-300 rounded-lg"></div>
        <i className={`${icon} text-cosmic-blue-light text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
      </div>
      <span className="text-xl font-cyber text-white group-hover:text-cosmic-blue-light transition-all duration-300">{text}</span>
    </div>
  );
}

// Pixel art VS icon
function PixelVsIcon() {
  return (
    <div className="w-24 h-24 relative">
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-1">
        {Array.from({ length: 25 }).map((_, index) => {
          // Creating a "VS" pattern
          const isColored = [0, 4, 5, 9, 10, 12, 14, 18, 20, 24].includes(index);
          
          return (
            <div
              key={index}
              className={`w-full h-full ${isColored ? 'bg-cosmic-blue-light' : 'bg-transparent'}`}
            ></div>
          );
        })}
      </div>
      <div className="absolute inset-0 animate-pulse-slow bg-cosmic-blue-light/20 blur-lg rounded-full"></div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="cosmic-container relative">
      {/* Background with game screenshot */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="/bg.png" 
          alt="Vibe Arena Gameplay" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-black via-cosmic-black/90 to-cosmic-black"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="section-title text-cosmic-blue-light font-cyber">Why Vibe Arena?</h2>
        
        <div className="mt-12 bg-cosmic-gray/30 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-cosmic-blue-light/30 relative overflow-hidden">
          {/* Corner pixel decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cosmic-blue-light/50"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cosmic-blue-light/50"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cosmic-blue-light/50"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cosmic-blue-light/50"></div>
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 pixel-grid-animated opacity-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <BenefitItem 
                text="No randomness. Every battle is skill and design." 
                icon="ph-fill ph-dice-five"
              />
              <BenefitItem 
                text="No twitch reflex needed. Pure mind vs mind." 
                icon="ph-fill ph-brain"
              />
            </div>
            <div>
              <BenefitItem 
                text="Benchmark your agents in real-time tactical battles." 
                icon="ph-fill ph-chart-line-up"
              />
              <BenefitItem 
                text="Build smarter, adapt faster, rise higher." 
                icon="ph-fill ph-trend-up"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="cosmic-divider"></div>
    </section>
  );
}

export default BenefitsSection; 