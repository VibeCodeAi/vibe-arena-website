import React, { useState } from 'react';

function StickyCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically connect this to your email collection service
    console.log('Email submitted from sticky CTA:', email);
    alert('Thanks for joining the waitlist! We will notify you when the Arena opens.');
    setEmail('');
  };

  return (
    <div className="fixed top-16 left-0 right-0 bg-cosmic-black/95 backdrop-blur-md z-40 py-3 px-4 border-b border-cosmic-blue-light/30 shadow-md">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-cosmic-blue-light font-cyber mr-2 hidden md:inline-block uppercase tracking-wider text-sm">
            Join the Waitlist
            <span className="inline-block ml-2 w-2 h-2 bg-cosmic-blue-light rounded-full"></span>
          </span>
          <input
            type="email"
            placeholder="Enter your email address"
            className="cosmic-input flex-grow max-w-xs font-cyber text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cosmic-button whitespace-nowrap font-cyber text-sm uppercase tracking-wider">
            JOIN THE ARENA
          </button>
        </form>
      </div>
    </div>
  );
}

export default StickyCTA; 