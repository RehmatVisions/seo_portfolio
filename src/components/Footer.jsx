import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Technical SEO', href: '/services/technical-seo-audit' },
      { name: 'Keyword Research', href: '/services/keyword-research' },
      { name: 'Content Optimization', href: '/services/content-optimization' },
      { name: 'Local SEO', href: '/services/local-seo' }
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'SEO Blog', href: '/blog' },
      { name: 'Free SEO Tools', href: '/seo-tools' },
      { name: 'SEO Guide', href: '/seo-guide' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  }

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Tahira Sani</h3>
            <p>SEO Specialist & Search Visibility Strategist</p>
          </motion.div>
          
          <div className="footer-links">
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Tahira Sani SEO. All rights reserved.</p>
          <div className="social-links">
            <a href="https://wa.me/923224778268" target="_blank" rel="noopener" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="mailto:sanitahira7@gmail.com" aria-label="Gmail">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tahira-sani-3286b536b/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer