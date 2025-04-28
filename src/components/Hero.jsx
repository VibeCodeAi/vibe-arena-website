import React, { useState } from 'react';

function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically connect this to your email collection service
    console.log('Email submitted:', email);
    alert('Thanks for joining the waitlist! We will notify you when the Arena opens.');
    setEmail('');
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black via-cosmic-black/90 to-cosmic-black z-0"></div>
      
      {/* Game screenshot as background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/ss.png" 
          alt="Vibe Arena Gameplay" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-cyber text-white">
          <span className="text-cosmic-blue-light block mb-2">Design the player.</span>
          <span className="text-cosmic-orange-light">Rule the battlefield.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 font-cyber">
          Craft your agent. Throw it into the food chain.
          <br className="hidden md:block" />
          Predator or prey? Let's find out.
        </p>
        
        <div className="mb-16 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-blue-light via-cosmic-purple-light to-cosmic-red-light rounded-lg blur opacity-75 transition duration-1000 animate-pulse-slow"></div>
          <div className="relative max-w-2xl mx-auto bg-cosmic-black/80 backdrop-blur-sm rounded-lg p-8 border border-cosmic-blue-light/20">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="cosmic-input w-full max-w-md font-cyber text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cosmic-button py-4 px-8 font-cyber tracking-wider text-lg">
                JOIN THE ARENA EARLY
              </button>
              <p className="text-sm mt-2 text-gray-400 font-cyber">No spam. Only cosmic updates.</p>
            </form>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div 
            className="w-8 h-8 border-2 border-cosmic-blue-light rotate-45 cursor-pointer hover:border-cosmic-blue-light/80 transition-all duration-300 animate-pulse-slow"
            onClick={() => document.getElementById('what-is').scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-4 h-4 border-b-2 border-r-2 border-cosmic-blue-light transform translate-x-1 translate-y-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 