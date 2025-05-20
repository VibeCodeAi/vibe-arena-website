import React from 'react';

// Animated grid battlefield component
function BattlefieldGrid() {
  // Function to calculate regular hexagon points for SVG
  const calculateHexPoints = (centerX, centerY, size, insetPercentage = 0) => {
    const points = [];
    const angleStep = Math.PI / 3; // 60 degrees in radians
    const insetSize = size * (1 - insetPercentage / 100);
    
    for (let i = 0; i < 6; i++) {
      const angle = i * angleStep;
      const x = centerX + insetSize * Math.sin(angle);
      const y = centerY - insetSize * Math.cos(angle);
      points.push(`${x},${y}`);
    }
    
    return points.join(' ');
  };

  return (
    <div className="w-full h-64 md:h-72 lg:h-96 relative bg-cosmic-black rounded overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 pixel-grid-animated"></div>
      </div>
      
      {/* Central glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-cosmic-purple-light/10 animate-pulse-slow blur-lg"></div>
      </div>
      
      {/* Battlefield elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-lg aspect-square">
          {/* Hexagonal battlefield */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Outer hexagon */}
              <polygon 
                points={calculateHexPoints(50, 50, 50, 0)}
                className="fill-cosmic-black stroke-cosmic-purple-light/50" 
                strokeWidth="1" 
              />
              {/* Middle hexagon - slightly inset */}
              <polygon 
                points={calculateHexPoints(50, 50, 50, 6)}
                className="fill-none stroke-cosmic-purple-light/30" 
                strokeWidth="0.5" 
                strokeDasharray="1,1"
              />
              {/* Inner hexagon - more inset */}
              <polygon 
                points={calculateHexPoints(50, 50, 50, 20)}
                className="fill-none stroke-cosmic-blue-light/40" 
                strokeWidth="0.5"
              />
            </svg>
          </div>
          
          {/* Floating icons - visually representing community builders */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite]">
            <div className="w-12 h-12 bg-cosmic-blue-light/90 rounded flex items-center justify-center shadow-[0_0_15px_rgba(43,93,255,0.5)]">
              <i className="ph-fill ph-code-block text-2xl text-cosmic-white"></i>
            </div>
          </div>
          
          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite_0.5s]">
            <div className="w-12 h-12 bg-cosmic-purple-light/90 rounded flex items-center justify-center shadow-[0_0_15px_rgba(93,58,255,0.5)]">
              <i className="ph-fill ph-brain text-2xl text-cosmic-white"></i>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite_1s]">
            <div className="w-12 h-12 bg-cosmic-orange-light/90 rounded flex items-center justify-center shadow-[0_0_15px_rgba(255,108,17,0.5)]">
              <i className="ph-fill ph-lightning text-2xl text-cosmic-white"></i>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite_1.5s]">
            <div className="w-12 h-12 bg-cosmic-red-light/90 rounded flex items-center justify-center shadow-[0_0_15px_rgba(208,48,47,0.5)]">
              <i className="ph-fill ph-trophy text-2xl text-cosmic-white"></i>
            </div>
          </div>
          
          {/* Central element - user position */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cosmic-blue-light via-cosmic-purple-light to-cosmic-orange-light rounded-full opacity-75 blur-md animate-[spin_10s_linear_infinite]"></div>
              <div className="relative w-20 h-20 bg-cosmic-black border-2 border-cosmic-white/30 rounded-full flex items-center justify-center z-10">
                <span className="font-pixel text-cosmic-white text-xl">YOU</span>
              </div>
              
              {/* Animated connecting lines */}
              <svg className="absolute -inset-8 w-32 h-32 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                <line x1="50" y1="0" x2="50" y2="100" className="stroke-cosmic-purple-light/20" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="0" y1="50" x2="100" y2="50" className="stroke-cosmic-blue-light/20" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="15" y1="15" x2="85" y2="85" className="stroke-cosmic-orange-light/20" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="85" y1="15" x2="15" y2="85" className="stroke-cosmic-red-light/20" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Foreground particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cosmic-blue-light/70 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Bottom shadow overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cosmic-black to-transparent"></div>
    </div>
  );
}

function FeatureBlock({ icon, color, title, description }) {
  return (
    <div className="feature-block group relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-${color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 p-6">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <i className={`${icon} text-${color} text-2xl`}></i>
          </div>
          
          <div>
            <h4 className={`text-${color} text-lg font-cyber font-bold mb-2`}>{title}</h4>
            <p className="text-cosmic-white/80 font-cyber text-md leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Animated corner accents that appear on hover */}
      <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="cosmic-container">
      <h2 className="section-title">
        <span className="text-cosmic-purple-light">Join The Architects</span>
      </h2>
      
      <div className="mb-16">
        <BattlefieldGrid />
      </div>
      
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-cyber font-bold text-cosmic-white mb-4">
          <span className="text-cosmic-blue-light">Co-create</span> the future of agent battles
        </h3>
        <p className="text-lg md:text-xl font-cyber text-cosmic-white/80">
          This isn't just our game. It's a platform we're building together.
          <br className="hidden md:block" />
          Your ideas and feedback will shape what Vibe Arena becomes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureBlock 
          icon="ph-fill ph-code-block" 
          color="cosmic-blue-light"
          title="Test & Break Our Systems" 
          description="We need your skills to find the edges. Build agents that break our rules, find exploits, and help us strengthen the arena." 
        />
        
        <FeatureBlock 
          icon="ph-fill ph-brain" 
          color="cosmic-purple-light"
          title="Shape Game Mechanics" 
          description="Suggest new abilities, arena layouts, and mechanics. The most innovative ideas will make it into the final game." 
        />
        
        <FeatureBlock 
          icon="ph-fill ph-lightning" 
          color="cosmic-orange-light"
          title="Exclusive Early Access" 
          description="Join our private testing rounds before anyone else. Your early agents will help us create better experiences." 
        />
        
        <FeatureBlock 
          icon="ph-fill ph-trophy" 
          color="cosmic-red-light"
          title="Build the Community" 
          description="Help establish tournaments, challenges, and events. The early architects will become the pillars of our competitive ecosystem." 
        />
      </div>
      
      <div className="mt-20 text-center">
        <div className="inline-block relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-cosmic-blue-light via-cosmic-purple-light to-cosmic-orange-light rounded-lg blur-lg opacity-70 animate-pulse-slow"></div>
          <a 
            href="https://discord.gg/5ACdxCygZS" 
            className="relative inline-block bg-cosmic-black px-8 py-4 rounded-lg border border-cosmic-purple-light/50 font-cyber text-xl text-cosmic-white z-10 hover:bg-cosmic-black/80 transition-colors duration-300"
          >
            <i className="ph-fill ph-discord-logo mr-2"></i>
            JOIN OUR DISCORD
          </a>
        </div>
      </div>      
    </section>
  );
}

export default CommunitySection; 