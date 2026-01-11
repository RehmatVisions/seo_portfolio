import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from './components/SEOHead'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import SoftCTA from './components/SoftCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <SEOHead />
        
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Navigation />
        
        <motion.main 
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Portfolio />
          <Process />
          <Testimonials />
          <Blog />
          <SoftCTA />
          <Contact />
        </motion.main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App