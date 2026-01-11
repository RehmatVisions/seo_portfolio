import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const blogPosts = [
    {
      title: "Complete Technical SEO Checklist for 2024",
      excerpt: "Essential technical SEO elements every website needs to rank higher in search results.",
      date: "2024-01-15",
      readTime: "8 min read",
      link: "/blog/technical-seo-checklist-2024"
    },
    {
      title: "Local SEO Strategies That Actually Work",
      excerpt: "Proven tactics to dominate local search results and drive more foot traffic to your business.",
      date: "2024-01-10", 
      readTime: "6 min read",
      link: "/blog/local-seo-strategies"
    },
    {
      title: "E-commerce SEO: The Complete Guide",
      excerpt: "Everything you need to know about optimizing your online store for search engines.",
      date: "2024-01-05",
      readTime: "12 min read",
      link: "/blog/ecommerce-seo-guide"
    }
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="blog-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Latest SEO Insights</h2>
          <p className="section-subtitle">
            Stay updated with the latest SEO trends and strategies
          </p>
        </motion.header>
        
        <div className="blog-grid grid-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="blog-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <h3>
                <a href={post.link}>{post.title}</a>
              </h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <motion.a 
                href={post.link} 
                className="read-more"
                whileHover={{ x: 5 }}
              >
                Read More <ArrowRight size={16} />
              </motion.a>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="blog-cta text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="/blog" className="cta-secondary">Read All Articles</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog