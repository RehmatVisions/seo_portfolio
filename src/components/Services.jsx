import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Search, BarChart, Globe, ShoppingCart, FileText, TrendingUp } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: <Search size={24} />,
      title: "Technical SEO Audits",
      description: "Complete website analysis identifying technical issues that impact search performance and user experience.",
      link: "/services/technical-seo-audit"
    },
    {
      icon: <BarChart size={24} />,
      title: "Keyword Research & Strategy", 
      description: "Data-driven keyword research to identify high-value opportunities and create winning content strategies.",
      link: "/services/keyword-research"
    },
    {
      icon: <FileText size={24} />,
      title: "Content Optimization",
      description: "Strategic content optimization that balances search visibility with user engagement and conversion goals.",
      link: "/services/content-optimization"
    },
    {
      icon: <Globe size={24} />,
      title: "Local SEO",
      description: "Dominate local search results and drive foot traffic with targeted local SEO strategies.",
      link: "/services/local-seo"
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce SEO",
      description: "Specialized SEO for online stores to increase product visibility and drive qualified traffic.",
      link: "/services/ecommerce-seo"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "SEO Analytics & Reporting",
      description: "Clear, actionable reporting that shows exactly how SEO efforts impact your business metrics.",
      link: "/services/seo-analytics"
    }
  ]

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">SEO Services</h2>
          <p className="section-subtitle">
            Comprehensive SEO solutions tailored to your business goals
          </p>
        </motion.header>
        
        <div className="services-grid grid-3">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="service-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.a 
                href={service.link} 
                className="service-link"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight size={16} />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services