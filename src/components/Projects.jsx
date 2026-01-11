import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      title: "E-commerce Site Speed Optimization",
      tags: ["Technical SEO", "Core Web Vitals"],
      metrics: [
        { value: "65%", label: "Faster Load Time" },
        { value: "40%", label: "Better CLS Score" }
      ],
      description: "Comprehensive technical audit and optimization of a 10,000+ product e-commerce site. Implemented lazy loading, optimized images, and restructured CSS delivery to achieve Core Web Vitals compliance.",
      tech: ["Google PageSpeed", "Screaming Frog", "GTMetrix"]
    },
    {
      title: "Local Business Schema Implementation",
      tags: ["Local SEO", "Schema Markup"],
      metrics: [
        { value: "180%", label: "Local Visibility" },
        { value: "95%", label: "Rich Snippet Coverage" }
      ],
      description: "Implemented comprehensive schema markup for a multi-location restaurant chain. Added LocalBusiness, Menu, and Review schemas resulting in enhanced SERP features and improved local rankings.",
      tech: ["JSON-LD", "Google My Business", "Schema Validator"]
    },
    {
      title: "SaaS Content Architecture Redesign",
      tags: ["Content SEO", "Information Architecture"],
      metrics: [
        { value: "320%", label: "Organic Traffic" },
        { value: "85%", label: "Keyword Coverage" }
      ],
      description: "Restructured content architecture for a B2B SaaS platform. Created topic clusters, optimized internal linking, and developed a content hub strategy targeting high-intent keywords.",
      tech: ["Ahrefs", "SEMrush", "Google Analytics"]
    },
    {
      title: "International SEO Implementation",
      tags: ["International SEO", "Hreflang"],
      metrics: [
        { value: "250%", label: "Global Reach" },
        { value: "12", label: "Countries Optimized" }
      ],
      description: "Implemented hreflang tags and localized SEO strategy for a global e-learning platform. Optimized for 12 countries with proper URL structure and localized content optimization.",
      tech: ["Hreflang Tags", "Google Search Console", "Sitemap Optimization"]
    },
    {
      title: "Mobile-First SEO Audit",
      tags: ["Mobile SEO", "UX Optimization"],
      metrics: [
        { value: "75%", label: "Mobile Speed Boost" },
        { value: "60%", label: "Mobile Traffic Growth" }
      ],
      description: "Conducted comprehensive mobile-first audit for a news website. Optimized mobile experience, implemented AMP pages, and improved mobile Core Web Vitals scores.",
      tech: ["Mobile Testing", "AMP Implementation", "Lighthouse Audits"]
    },
    {
      title: "Enterprise SEO Migration",
      tags: ["Technical SEO", "Site Migration"],
      metrics: [
        { value: "98%", label: "Traffic Retained" },
        { value: "0", label: "Ranking Drops" }
      ],
      description: "Managed SEO strategy for enterprise website migration from legacy CMS to modern platform. Preserved 98% of organic traffic through careful redirect mapping and content optimization.",
      tech: ["Redirect Mapping", "Crawl Analysis", "Migration Planning"]
    }
  ]

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Recent SEO projects showcasing technical expertise and results
          </p>
        </motion.header>
        
        <div className="projects-grid grid-2">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-metrics">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="metric">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects