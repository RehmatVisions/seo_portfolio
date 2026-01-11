import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Zap } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [typingText, setTypingText] = useState('')
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  const searchQueries = [
    'SEO specialist near me',
    'increase website traffic',
    'improve search rankings',
    'technical SEO audit',
    'local SEO services',
    'keyword research tools'
  ]

  const stats = [
    { number: 150, label: '% Average Traffic Growth', suffix: '%' },
    { number: 500, label: '+ Keywords Ranked', suffix: '+' },
    { number: 50, label: '+ Clients Served', suffix: '+' }
  ]

  // Typing animation effect
  useEffect(() => {
    const typeWriter = () => {
      const currentQuery = searchQueries[currentQueryIndex]
      
      if (isDeleting) {
        setTypingText(currentQuery.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        setTypingText(currentQuery.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }
    }

    const typeSpeed = isDeleting ? 50 : 100
    let timeout

    if (!isDeleting && charIndex === searchQueries[currentQueryIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentQueryIndex((prev) => (prev + 1) % searchQueries.length)
      timeout = setTimeout(typeWriter, 500)
    } else {
      timeout = setTimeout(typeWriter, typeSpeed)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentQueryIndex, searchQueries])

  // Animated counter hook
  const useAnimatedCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
      if (!hasAnimated) return

      const increment = target / (duration / 16)
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCount(Math.floor(current))
      }, 16)

      return () => clearInterval(timer)
    }, [hasAnimated, target, duration])

    return { count, setHasAnimated }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 70
      const targetPosition = element.offsetTop - navHeight - 20
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <header className="hero-title">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="name">Tahira Sani</span>
              <span className="role">SEO Specialist & Search Visibility Strategist</span>
            </motion.h1>
          </header>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I build organic growth engines that drive sustainable traffic and revenue for businesses ready to dominate search results
          </motion.h2>
          
          <motion.p 
            className="hero-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Search isn't just about rankings—it's about connecting the right people with your business at the exact moment they need you most.
          </motion.p>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {stats.map((stat, index) => {
              const { count, setHasAnimated } = useAnimatedCounter(stat.number)
              
              return (
                <motion.div 
                  key={index}
                  className="stat"
                  whileHover={{ y: -5, scale: 1.05 }}
                  onViewportEnter={() => setHasAnimated(true)}
                  viewport={{ once: true }}
                >
                  <span className="stat-number">
                    {count}{stat.suffix}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              )
            })}
          </motion.div>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              className="cta-primary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See How I Can Help
            </motion.button>
            <motion.button
              className="cta-secondary"
              onClick={() => scrollToSection('portfolio')}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div 
            className="search-visualization"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <span className="typing-text">{typingText}</span>
              <motion.span 
                className="cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </div>
            <div className="search-results">
              <motion.div 
                className="result-item featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="result-url">yourwebsite.com</div>
                <div className="result-title">Your Business - Top Result</div>
                <div className="result-snippet">Ranking #1 for your target keywords...</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="performance-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 500 }}
            whileHover={{ scale: 1.1 }}
          >
            <Zap className="badge-icon" size={16} />
            <span className="badge-text">Fast Loading</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero