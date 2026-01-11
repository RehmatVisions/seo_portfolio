import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    {
      quote: "Tahira's SEO expertise transformed our online presence. We saw a 200% increase in organic traffic within 6 months.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp"
    },
    {
      quote: "The technical SEO audit revealed issues we never knew existed. The improvements led to immediate ranking gains.",
      author: "Mike Chen", 
      position: "Founder, LocalBiz Solutions"
    },
    {
      quote: "Professional, data-driven approach with clear communication. Our ROI from SEO has never been better.",
      author: "Emma Rodriguez",
      position: "E-commerce Manager, Fashion Forward"
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Client Success Stories</h2>
        </motion.header>
        
        <div className="testimonials-grid grid-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={index}
              className="testimonial"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="quote-icon" size={24} />
              <p>"{testimonial.quote}"</p>
              <cite>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.position}</span>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials