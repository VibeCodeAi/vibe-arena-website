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
import { ToastProvider } from './components/Toast'
import GoogleAnalytics from './components/GoogleAnalytics'

function CosmicDivider() {
  return (
    <div className="cosmic-divider"></div>
  )
}

function App() {
  return (
    <ToastProvider>
      <div className="bg-cosmic-black text-white min-h-screen">
        <GoogleAnalytics />
        <Header />
        <main className="pt-16">
          <Hero />
          <WhatIs />
          <CosmicDivider />
          {/* <GameplaySnapshot /> */}
          {/* <BenefitsSection /> */}
          <CommunitySection />
          <CosmicDivider />
          {/* <ArchitectSection /> */}
          <FinalCTA />
          <CosmicDivider />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}

export default App
