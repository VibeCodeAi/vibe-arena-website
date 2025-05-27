import React, { useState, useContext, useEffect } from 'react';
import { validEmail } from '../utils/logic';
import { submitEmail } from '../api/submitEmail';
import { ToastContext } from './Toast';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2025-06-14T23:59:59');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {[
        { label: 'DAYS', value: timeLeft.days },
        { label: 'HOURS', value: timeLeft.hours },
        { label: 'MINS', value: timeLeft.minutes },
        { label: 'SECS', value: timeLeft.seconds }
      ].map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="bg-cosmic-gray/30 border border-cosmic-orange-light/30 rounded-lg p-4 mb-2">
            <div className="text-2xl md:text-3xl font-cyber font-bold text-cosmic-orange-light">
              {value.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs font-cyber text-gray-400 uppercase tracking-wider">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsTicker({ stats }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="h-16 flex items-center justify-center">
      <div className="transition-all duration-500 text-center">
        <div className="text-2xl font-cyber font-bold text-cosmic-green">
          {stats[currentIndex].value}
        </div>
        <div className="text-sm text-gray-400 uppercase tracking-wider">
          {stats[currentIndex].label}
        </div>
      </div>
    </div>
  );
}

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
    <section id="final-cta" className="relative py-20 bg-cosmic-black overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black via-cosmic-orange/10 to-cosmic-black"></div>
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="grid grid-cols-16 h-full opacity-20">
            {[...Array(16)].map((_, i) => (
              <div 
                key={i} 
                className="border-r border-cosmic-orange-light/20"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animation: 'pulse 4s infinite'
                }}
              ></div>
            ))}
          </div>
        </div>
        {/* Pulsing glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-cosmic-orange/5 via-transparent to-transparent opacity-60 animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Alert header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-6 bg-cosmic-orange/10 border border-cosmic-orange-light/30 rounded-lg px-6 py-3">
            <div className="w-3 h-3 bg-cosmic-orange-light rounded-full animate-pulse"></div>
            <span className="text-cosmic-orange-light font-cyber text-sm uppercase tracking-wider font-bold">
              Priority Alert: Beta Access Limited
            </span>
            <div className="w-3 h-3 bg-cosmic-orange-light rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold leading-tight">
            <span className="text-white">The Arena</span>
            <br />
            <span className="text-cosmic-orange-light">Awaits Your</span>
            <br />
            <span className="text-cosmic-blue-light">Champion</span>
          </h2>
        </div>

        {/* Main CTA container */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-cosmic-orange via-cosmic-red to-cosmic-purple rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>
          <div className="relative bg-cosmic-black/90 backdrop-blur-sm border border-cosmic-orange-light/30 rounded-xl p-8 md:p-12">
            
            {/* Countdown */}
            {/* <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-cyber font-bold text-white mb-4">
                The arena opens to the Alphas in:
              </h3>
              <CountdownTimer />
              <p className="text-gray-300 text-sm">
                Limited slots available. First come, first serve.
              </p>
            </div> */}

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="commander@domain.com"
                  className="w-full bg-cosmic-gray/50 border border-cosmic-orange-light/30 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cosmic-orange-light/50 focus:border-cosmic-orange-light transition-all duration-300 font-cyber text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-cosmic-green rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className={`w-full py-4 px-8 font-cyber uppercase tracking-wider text-xl font-bold rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  isSubmitting 
                    ? 'bg-cosmic-gray cursor-not-allowed' 
                    : 'bg-cosmic-orange hover:bg-cosmic-orange-light'
                }`}
                disabled={isSubmitting}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Signing up...' : 'CLAIM YOUR PLACE'}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-orange via-cosmic-red to-cosmic-purple transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                )}
              </button>
            </form>

            {/* Urgency messaging */}
            <div className="mt-8 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-300">We'll notify you when the public alpha is available. No spam.</span>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom messaging */}
        <div className="text-center mt-12">
          <p className="text-gray-400 font-cyber">
            Join the elite. Build the future. 
            <span className="text-cosmic-orange-light font-bold"> Command the arena.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA; 