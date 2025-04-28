import React from 'react';

// Pixel art custom icon component
function PixelIcon({ type }) {
  // Define different pixel patterns for each icon type
  const getPattern = () => {
    const patterns = {
      swords: [
        [0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0],
      ],
      brain: [
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 1],
        [1, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 1, 1, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
      ],
      cycle: [
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
      ],
      trophy: [
        [0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0],
      ]
    };
    
    return patterns[type] || patterns.swords;
  };
  
  const pattern = getPattern();
  
  return (
    <div className="w-10 h-10 relative">
      <div className="absolute inset-0 grid" style={{ 
        gridTemplateColumns: `repeat(${pattern[0].length}, 1fr)`,
        gridTemplateRows: `repeat(${pattern.length}, 1fr)`
      }}>
        {pattern.flat().map((pixel, index) => (
          <div
            key={index}
            className={`w-full h-full ${pixel ? 'bg-cosmic-blue-light' : 'bg-transparent'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function FeatureBlock({ title, description, iconType }) {
  return (
    <div className="feature-block relative group">
      {/* Corner pixel decorations that appear on hover */}
      <div className="absolute top-0 left-0 w-3 h-3 bg-cosmic-blue-light/0 transition-all duration-300 group-hover:bg-cosmic-blue-light/30"></div>
      <div className="absolute top-0 right-0 w-3 h-3 bg-cosmic-blue-light/0 transition-all duration-300 group-hover:bg-cosmic-blue-light/30"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 bg-cosmic-blue-light/0 transition-all duration-300 group-hover:bg-cosmic-blue-light/30"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-cosmic-blue-light/0 transition-all duration-300 group-hover:bg-cosmic-blue-light/30"></div>
      
      <div className="flex items-center justify-center mb-4">
        <PixelIcon type={iconType} />
      </div>
      <h3 className="text-xl font-bold mb-3 font-cyber text-center uppercase tracking-wider text-cosmic-blue-light">{title}</h3>
      <p className="font-cyber text-gray-300">{description}</p>
    </div>
  );
}

function GameplaySnapshot() {
  return (
    <section id="gameplay" className="cosmic-container relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="/bg.png" 
          alt="Vibe Arena Gameplay" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-cosmic-black/80"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="section-title text-cosmic-purple-light font-cyber">How it Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <FeatureBlock 
            iconType="swords"
            title="2v2 Arenas"
            description="Tactical duels between agents on a hex-grid battlefield. Every move matters in this chess-like combat."
          />
          
          <FeatureBlock 
            iconType="brain"
            title="Design Golems"
            description="Program your agent's actions and behaviors with code, GUI, or prompt blocks. Your intelligence design is the weapon."
          />
          
          <FeatureBlock 
            iconType="cycle"
            title="Weekly Trials"
            description="New affixes, bosses, and limited-time modes keep the battlefield fresh. Adapt your design or perish."
          />
          
          <FeatureBlock 
            iconType="trophy"
            title="Ranked Seasons"
            description="Climb the ladder. Dominate the food chain. Build your legacy as the greatest architect of intelligence."
          />
        </div>
        
        <div className="mt-16 mx-auto max-w-3xl text-center">
          <div className="inline-block p-6 bg-cosmic-black/40 backdrop-blur-sm border border-cosmic-blue-light/20 rounded-lg">
            <p className="text-2xl font-cyber">
              <span className="text-cosmic-blue-light block mb-2">You are the architect.</span>
              <span className="opacity-80 font-cyber">The one who bends the battlefield without ever stepping onto it.</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="cosmic-divider"></div>
    </section>
  );
}

export default GameplaySnapshot; 