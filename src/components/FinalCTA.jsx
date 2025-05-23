import React, { useState, useContext } from 'react';
import { validEmail } from '../utils/logic';
import { submitEmail } from '../api/submitEmail';
import { ToastContext } from './Toast';

function FinalCTA() {
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
          Ready to create your champion?
        </h2>
        
        <div className="relative max-w-2xl mx-auto mt-4 sm:mt-8 md:mt-16 lg:mt-24">
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
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className={`cosmic-button-orange w-full max-w-lg text-lg py-2 px-8 font-cyber uppercase tracking-wider ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'JOINING...' : 'JOIN THE WAITLIST'}
              </button>
              <p className="text-sm mt-4 text-gray-400 font-cyber">We'll notify you when the public alpha is available. No spam.</p>
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