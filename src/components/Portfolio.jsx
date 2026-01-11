import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const caseStudies = [
    {
      title: "UrbanFit Wellness Center",
      industry: "Local SEO",
      metrics: [
        { number: "285%", label: "Local Search Visibility" },
        { number: "160%", label: "New Member Signups" }
      ],
      summary: "Comprehensive local SEO strategy including Google My Business optimization, local citation building, and location-based content marketing for a fitness center chain.",
      link: "/case-studies/urbanfit-wellness-center"
    },
    {
      title: "TechGear Pro E-commerce",
      industry: "E-commerce SEO",
      metrics: [
        { number: "340%", label: "Product Page Rankings" },
        { number: "220%", label: "Organic Revenue Growth" }
      ],
      summary: "Technical SEO overhaul and product optimization strategy for an electronics retailer, focusing on category page architecture and product schema implementation.",
      link: "/case-studies/techgear-pro-ecommerce"
    },
    {
      title: "CloudSync SaaS Platform",
      industry: "B2B SaaS SEO",
      metrics: [
        { number: "450%", label: "Qualified Lead Generation" },
        { number: "75%", label: "Customer Acquisition Cost Reduction" }
      ],
      summary: "Content-driven SEO strategy targeting high-intent B2B keywords, featuring thought leadership content and technical documentation optimization for a cloud management platform.",
      link: "/case-studies/cloudsync-saas-platform"
    },
    {
      title: "Heritage Law Firm",
      industry: "Professional Services SEO",
      metrics: [
        { number: "195%", label: "Practice Area Rankings" },
        { number: "130%", label: "Consultation Requests" }
      ],
      summary: "Authority-building SEO campaign combining technical optimization with legal content marketing, targeting competitive practice area keywords and local legal searches.",
      link: "/case-studies/heritage-law-firm"
    }
  ]

  return (
    <section id="portfolio" className="portfolio-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">Real results from real businesses</p>
        </motion.header>
        
        <div className="portfolio-grid grid-2">
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              className="case-study-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="case-study-header">
                <h3>{study.title}</h3>
                <span className="industry-tag">{study.industry}</span>
              </div>
              
              <div className="case-study-results">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="result-metric">
                    <span className="metric-number">{metric.number}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
              
              <p className="case-study-summary">{study.summary}</p>
              
              <motion.a 
                href={study.link} 
                className="case-study-link"
                whileHover={{ x: 5 }}
              >
                Read Full Case Study <ArrowRight size={16} />
              </motion.a>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="portfolio-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="/case-studies" className="cta-secondary">View All Case Studies</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio