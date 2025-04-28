import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import GameplaySnapshot from './components/GameplaySnapshot'
import ArchitectSection from './components/ArchitectSection'
import CommunitySection from './components/CommunitySection'
import BenefitsSection from './components/BenefitsSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setShowStickyCTA(heroBottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header />
      {showStickyCTA && <StickyCTA />}
      <main>
        <Hero />
        <WhatIs />
        <GameplaySnapshot />
        <ArchitectSection />
        <CommunitySection />
        <BenefitsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
