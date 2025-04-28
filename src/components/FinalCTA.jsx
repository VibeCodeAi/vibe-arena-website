import React, { useState } from 'react';

function FinalCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically connect this to your email collection service
    console.log('Email submitted from final CTA:', email);
    alert('Thanks for joining the waitlist! We will notify you when the Arena opens.');
    setEmail('');
  };

  return (
    <section id="final-cta" className="cosmic-container relative">
      {/* Background element with screenshot */}
      <div className="absolute inset-0 opacity-20 z-0 overflow-hidden">
        <img 
          src="/bg.png" 
          alt="Vibe Arena Gameplay" 
          className="w-full h-full object-cover object-center blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black/90 to-cosmic-black"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-cosmic-orange-light font-cyber">
          Ready to summon your champion?
        </h2>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-blue-light via-cosmic-purple-light to-cosmic-orange-light rounded-lg blur opacity-75 animate-pulse-slow"></div>
          <div className="relative bg-cosmic-black/90 backdrop-blur-sm p-8 rounded-lg border border-cosmic-blue-light/20">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="cosmic-input w-full max-w-lg mb-6 font-cyber"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cosmic-button-orange text-lg py-4 px-8 font-cyber uppercase tracking-wider">
                SUMMON YOUR GOLEM
              </button>
              <p className="text-sm mt-4 text-gray-400 font-cyber">Only the architects will enter first.</p>
            </form>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://discord.gg/5ACdxCygZS" className="cosmic-button w-full sm:w-auto bg-cosmic-blue/20 hover:bg-cosmic-blue/30 cursor-pointer font-cyber uppercase tracking-wider flex items-center justify-center">
            <i className="ph-fill ph-discord-logo mr-2"></i>
            Discord
          </a>
          <a href="https://x.com/vibe_arena_com" className="cosmic-button w-full sm:w-auto bg-cosmic-blue/20 hover:bg-cosmic-blue/30 cursor-pointer font-cyber uppercase tracking-wider flex items-center justify-center">
            <i className="ph-fill ph-twitter-logo mr-2"></i>
            Twitter
          </a>
          <a href="https://github.com/VibeCodeAi" className="cosmic-button w-full sm:w-auto bg-cosmic-blue/20 hover:bg-cosmic-blue/30 cursor-pointer font-cyber uppercase tracking-wider flex items-center justify-center">
            <i className="ph-fill ph-github-logo mr-2"></i>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA; 