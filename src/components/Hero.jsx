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
    <section id="hero-section" className="min-h-screen flex items-center pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black via-cosmic-black/90 to-cosmic-black z-0"></div>
      
      {/* Game screenshot as background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/bg.png" 
          alt="Vibe Arena Gameplay" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-cyber text-white">
            <span className="text-cosmic-blue-light block mb-2">Design the player.</span>
            <span className="text-cosmic-orange-light">Rule the battlefield.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-cyber">
            Craft your agent. Throw it into the food chain.
            <br />
            Predator or prey? Let's find out.
          </p>
          
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-blue-light via-cosmic-purple-light to-cosmic-orange-light rounded-lg blur opacity-75 animate-pulse-slow"></div>
            <div className="relative bg-cosmic-black/80 backdrop-blur-sm rounded-lg p-8 border border-cosmic-blue-light/20">
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="cosmic-input w-full font-cyber text-center"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="cosmic-button py-2 font-cyber tracking-wider text-lg w-full">
                  JOIN THE ARENA EARLY
                </button>
                <p className="text-sm mt-2 text-gray-400 font-cyber">No spam. Only cosmic updates.</p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Right side - game board image */}
        <div className="flex items-center justify-center">
        </div>
      </div>
    </section>
  );
}

export default Hero; 