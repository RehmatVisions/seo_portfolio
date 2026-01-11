import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: "Core SEO Skills",
      skills: [
        "Keyword Research & Analysis",
        "Competitive Intelligence", 
        "Content Strategy & Optimization",
        "Link Building & Outreach",
        "Local SEO & GMB Optimization",
        "E-commerce SEO",
        "SEO Auditing & Analysis",
        "SERP Analysis & Monitoring"
      ]
    },
    {
      title: "Technical SEO Skills",
      skills: [
        "Site Architecture & URL Structure",
        "Core Web Vitals Optimization",
        "Schema Markup Implementation",
        "XML Sitemaps & Robots.txt",
        "Page Speed Optimization",
        "Mobile-First Indexing",
        "Crawl Budget Optimization",
        "International SEO & Hreflang"
      ]
    },
    {
      title: "SEO Tools & Platforms",
      skills: [
        "Google Analytics & GA4",
        "Google Search Console",
        "Ahrefs & SEMrush",
        "Screaming Frog SEO Spider",
        "Google Tag Manager",
        "Moz Pro & Majestic",
        "BrightEdge & Conductor",
        "PageSpeed Insights & GTMetrix"
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">SEO Expertise</h2>
          <p className="section-subtitle">
            Comprehensive skill set covering all aspects of search engine optimization
          </p>
        </motion.header>
        
        <div className="skills-grid grid-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <h3>{category.title}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <CheckCircle size={16} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills