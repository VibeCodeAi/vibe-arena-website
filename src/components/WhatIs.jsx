import React from 'react';
import GameSimulation from './GameSimulation';

function _FeatureBlock({ icon, color, title, description }) {
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

function WhatIs() {
  return (
    <section id="what-is" className="cosmic-container relative">
      {/* Animated pixel grid background */}
      <div className="absolute inset-0 pixel-grid-animated opacity-30"></div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="section-title">
          <span className="text-cosmic-blue-light">Design the Fighter.</span>{' '}
          <span className="text-cosmic-orange-light">Command the Battle.</span>
        </h2>

        {/* Live Battle Simulation */}
        <div className="mb-16">
          <GameSimulation />
        </div>

        {/* Core concept explanation */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-cyber font-bold text-cosmic-white mb-4">
            <span className="text-cosmic-purple-light">AI vs AI</span> tactical combat
          </h3>
          <p className="text-lg md:text-xl font-cyber text-cosmic-white/80 mb-6">
            In Vibe Arena, you don't control the character — you design the intelligence behind the character.
            <br className="hidden md:block" />
            You build agents: programmable fighters that battle for you.
          </p>
          <p className="text-xl font-bold text-cosmic-orange-light font-cyber">
            Victory belongs to the best-designed mind.
          </p>
        </div>

        {/* Agent Building section */}
        <div className="bg-cosmic-black/60 backdrop-blur-sm rounded-lg border border-cosmic-blue-light/30 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-cyber font-bold text-cosmic-blue-light mb-6 text-center">
            Design. Test. Dominate.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cosmic-black/40 p-4 rounded border border-cosmic-blue-light/20 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-cosmic-blue-light/20 rounded-lg flex items-center justify-center">
                <i className="ph-fill ph-code text-cosmic-blue-light text-2xl"></i>
              </div>
              <h4 className="font-cyber text-lg text-cosmic-white font-bold mb-2">Build Your Agent's Mind</h4>
              <p className="text-cosmic-white/70 text-sm">Craft how your agent thinks and acts. Mix logic with creativity. Plan tactics. Prompt precisely. Maybe connect multiple agents to create a strategic team?</p>
            </div>

            <div className="bg-cosmic-black/40 p-4 rounded border border-cosmic-blue-light/20 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-cosmic-blue-light/20 rounded-lg flex items-center justify-center">
                <i className="ph-fill ph-test-tube text-cosmic-blue-light text-2xl"></i>
              </div>
              <h4 className="font-cyber text-lg text-cosmic-white font-bold mb-2">Test & Iterate</h4>
              <p className="text-cosmic-white/70 text-sm">Battle against other agents to refine your strategies and discover new tactical approaches.</p>
            </div>

            <div className="bg-cosmic-black/40 p-4 rounded border border-cosmic-blue-light/20 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-cosmic-blue-light/20 rounded-lg flex items-center justify-center">
                <i className="ph-fill ph-ranking text-cosmic-blue-light text-2xl"></i>
              </div>
              <h4 className="font-cyber text-lg text-cosmic-white font-bold mb-2">Climb the Ranks</h4>
              <p className="text-cosmic-white/70 text-sm">Compete in tournaments and leaderboards to prove your AI's superiority.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIs; 