import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, BarChart, Settings, FileText, PenTool, TrendingUp } from 'lucide-react'

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const workflowSteps = [
    {
      number: "01",
      icon: <Search size={24} />,
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's current SEO performance, identifying technical issues, content gaps, and optimization opportunities. I examine site architecture, crawlability, and competitive positioning to establish a baseline."
    },
    {
      number: "02", 
      icon: <BarChart size={24} />,
      title: "Keyword Research",
      description: "Data-driven keyword analysis to identify high-value search terms your target audience uses. I prioritize keywords based on search volume, competition, and business relevance to create a strategic keyword roadmap."
    },
    {
      number: "03",
      icon: <Settings size={24} />,
      title: "Technical Fixes",
      description: "Implementation of critical technical improvements including site speed optimization, mobile responsiveness, schema markup, and crawl error resolution. These foundational fixes ensure search engines can properly index and rank your content."
    },
    {
      number: "04",
      icon: <FileText size={24} />,
      title: "On-Page Optimization", 
      description: "Strategic optimization of title tags, meta descriptions, headers, and internal linking structure. Each page is optimized for target keywords while maintaining natural readability and user experience."
    },
    {
      number: "05",
      icon: <PenTool size={24} />,
      title: "Content Optimization",
      description: "Enhancement of existing content and creation of new, keyword-targeted pages that provide genuine value to users. I focus on search intent alignment and comprehensive topic coverage to establish topical authority."
    },
    {
      number: "06",
      icon: <TrendingUp size={24} />,
      title: "Tracking & Reporting",
      description: "Implementation of comprehensive analytics tracking and regular performance reporting. I monitor keyword rankings, organic traffic growth, and conversion metrics to measure ROI and identify optimization opportunities."
    }
  ]

  const timeline = [
    { phase: "Phase 1", duration: "Week 1-2", description: "Audit & Research" },
    { phase: "Phase 2", duration: "Week 3-4", description: "Technical Implementation" },
    { phase: "Phase 3", duration: "Week 5-8", description: "Content & Optimization" },
    { phase: "Ongoing", duration: "Monthly", description: "Monitoring & Reporting" }
  ]

  return (
    <section id="process" className="process-section" ref={ref}>
      <div className="container">
        <motion.header 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My SEO Workflow</h2>
          <p className="section-subtitle">
            A systematic approach that delivers consistent, measurable results
          </p>
        </motion.header>
        
        <div className="workflow-steps">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="workflow-step"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="workflow-timeline"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              whileHover={{ scale: 1.05 }}
            >
              <span className="timeline-phase">{item.phase}</span>
              <span className="timeline-duration">{item.duration}</span>
              <span className="timeline-description">{item.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process