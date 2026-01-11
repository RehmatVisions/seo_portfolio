import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MessageCircle, Linkedin, Send } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '', email: '', website: '', service: '', message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, website, service, message } = formData
    
    let whatsappMessage = `Hi Tahira! I'm interested in your SEO services.\n\n`
    whatsappMessage += `Name: ${name}\nEmail: ${email}\n`
    if (website) whatsappMessage += `Website: ${website}\n`
    if (service) whatsappMessage += `Service Needed: ${service}\n`
    if (message) whatsappMessage += `Message: ${message}\n`
    
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/923224778268?text=${encodedMessage}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Ready to Grow Your Organic Traffic?</h2>
          <p className="section-subtitle">
            Let's discuss how SEO can drive real results for your business
          </p>
        </motion.header>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get Your Free SEO Audit</h3>
            <p>I'll analyze your website and provide actionable recommendations to improve your search visibility.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Mail size={20} />
                <div>
                  <strong>Email:</strong>
                  <a href="mailto:sanitahira7@gmail.com">sanitahira7@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <Phone size={20} />
                <div>
                  <strong>Phone:</strong>
                  <a href="tel:+923224778268">+923224778268</a>
                </div>
              </div>
              <div className="contact-method">
                <Linkedin size={20} />
                <div>
                  <strong>LinkedIn:</strong>
                  <a href="https://www.linkedin.com/in/tahira-sani-3286b536b/" target="_blank" rel="noopener">Connect with me</a>
                </div>
              </div>
            </div>
            
            <div className="social-icons">
              <a href="https://wa.me/923224778268" className="social-icon whatsapp">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:sanitahira7@gmail.com" className="social-icon gmail">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tahira-sani-3286b536b/" className="social-icon linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="website">Website URL</label>
              <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="seo-audit">SEO Audit</option>
                <option value="technical-seo">Technical SEO</option>
                <option value="content-optimization">Content Optimization</option>
                <option value="local-seo">Local SEO</option>
                <option value="ecommerce-seo">E-commerce SEO</option>
                <option value="ongoing-seo">Ongoing SEO</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your SEO goals and challenges..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="cta-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Send Message to WhatsApp
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact