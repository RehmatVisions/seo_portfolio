import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Award, TrendingUp } from 'lucide-react'
import contentCertificate from '../assets/content.jpg'
import seoCertificate from '../assets/seo.jpg'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const expertiseAreas = [
    'Technical SEO Audits',
    'Keyword Research & Strategy', 
    'Content Optimization',
    'Local SEO',
    'E-commerce SEO',
    'SEO Analytics & Reporting'
  ]

  const tools = [
    'Google Analytics & GA4',
    'Google Search Console',
    'Ahrefs & SEMrush',
    'Screaming Frog SEO Spider',
    'Google Tag Manager',
    'Moz Pro & Majestic'
  ]

  const miniStats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '150%', label: 'Avg. Traffic Growth' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Tahira Sani</h2>
          <p className="section-subtitle">
            Transforming businesses through strategic SEO and data-driven growth
          </p>
        </motion.header>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="about-text">
            <motion.article className="about-story" variants={itemVariants}>
              <h3>My SEO Philosophy</h3>
              <p>
                I believe in the power of data-driven decisions and long-term organic growth. 
                My analytical mindset helps me uncover opportunities others miss, turning complex 
                search algorithms into clear business advantages. I don't chase quick fixes or 
                temporary ranking boosts—I build sustainable SEO foundations that deliver 
                consistent results over time.
              </p>
              
              <p>
                Every strategy I develop is rooted in thorough research, competitive analysis, 
                and measurable outcomes. My goal is simple: connect your business with the right 
                audience through strategic search visibility that drives real revenue growth.
              </p>
            </motion.article>
            
            <motion.div className="expertise-showcase" variants={itemVariants}>
              <h3>Core Expertise</h3>
              <ul className="expertise-list">
                {expertiseAreas.map((area, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle size={16} className="expertise-icon" />
                    <span>{area}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.aside className="about-visual" variants={itemVariants}>
            <div className="credentials-card">
              <h4>Professional Credentials</h4>
              <div className="cert-grid">
                <motion.div 
                  className="cert-item"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={contentCertificate} 
                    alt="Content Marketing Certificate - Tahira Sani" 
                    className="cert-image"
                    loading="lazy"
                  />
                  <span className="cert-title">Content Marketing Certified</span>
                  <div className="cert-badge">
                    <Award size={12} />
                    <span>Verified</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="cert-item"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={seoCertificate} 
                    alt="SEO Specialist Certificate - Tahira Sani" 
                    className="cert-image"
                    loading="lazy"
                  />
                  <span className="cert-title">SEO Specialist Certified</span>
                  <div className="cert-badge">
                    <Award size={12} />
                    <span>Verified</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="tools-section">
                <h4>Professional Toolkit</h4>
                <div className="tools-grid">
                  {tools.map((tool, index) => (
                    <motion.span 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="stats-preview">
                <h4>Quick Stats</h4>
                <div className="mini-stats">
                  {miniStats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="mini-stat"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="mini-stat-number">
                        <TrendingUp size={16} className="stat-icon" />
                        {stat.number}
                      </span>
                      <span className="mini-stat-label">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  )
}

export default About