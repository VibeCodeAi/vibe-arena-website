import React, { useState, useContext } from 'react';
import { validEmail } from '../utils/logic';
import { submitEmail } from '../api/submitEmail';
import { ToastContext } from './Toast';

function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useContext(ToastContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validEmail(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitEmail(email);
      showToast('Thanks for joining the waitlist! We will notify you when the Arena opens.', 'success');
      setEmail('');
    } catch (error) {
      showToast('Failed to join the waitlist. Please try again later.', 'error');
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center pt-20 pb-10 px-4 relative overflow-hidden scan-lines">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black via-cosmic-black/90 to-cosmic-black z-0"></div>
      
      {/* Game screenshot as background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/bg.png" 
          alt="Vibe Arena Gameplay" 
          className="w-full h-full object-cover md:object-center object-left"
        />
      </div>
      
      <div className="max-w-6xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-cyber text-white">
            <span className="text-cosmic-blue-light block mb-2 text-glow-blue">Design the player.</span>
            <span className="text-cosmic-orange-light text-glow-orange">Rule the battlefield.</span>
          </h1>
          
          <p className="text-xl font-bold md:font-normal md:text-2xl mb-12 text-gray-200 font-cyber">
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
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  className={`w-full py-4 px-8 font-cyber uppercase tracking-wider text-lg font-bold rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    isSubmitting 
                      ? 'bg-cosmic-gray cursor-not-allowed' 
                      : 'bg-cosmic-blue hover:bg-cosmic-blue-light'
                  }`}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'JOINING...' : 'JOIN THE ARENA EARLY'}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-blue-light transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  )}
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