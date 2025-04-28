import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import GameplaySnapshot from './components/GameplaySnapshot'
import BenefitsSection from './components/BenefitsSection'
import CommunitySection from './components/CommunitySection'
import ArchitectSection from './components/ArchitectSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-cosmic-black text-white min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhatIs />
        <GameplaySnapshot />
        <BenefitsSection />
        <CommunitySection />
        <ArchitectSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
