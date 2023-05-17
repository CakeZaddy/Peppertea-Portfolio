import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
