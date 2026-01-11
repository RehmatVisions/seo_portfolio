import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SoftCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
    <section className="soft-cta-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="soft-cta-content text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to see what strategic SEO can do for your business? I'd love to explore how we can grow your organic presence together.
          </motion.p>
          <motion.button
            className="cta-primary"
            onClick={() => scrollToSection('contact')}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SoftCTA