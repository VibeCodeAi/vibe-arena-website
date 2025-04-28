import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import Gameplay from './components/Gameplay'
import Community from './components/Community'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <main className="bg-cosmic-black text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
        <WhatIs />
        <Gameplay />
        <Community />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  )
}

export default App
