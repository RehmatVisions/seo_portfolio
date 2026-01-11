import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tahira Sani",
    "jobTitle": "SEO Specialist & Search Visibility Strategist",
    "description": "Expert SEO specialist helping businesses grow organic traffic and improve search rankings with data-driven strategies",
    "url": "https://tahira-sani-seo.com",
    "image": "https://tahira-sani-seo.com/images/tahira-sani-seo-specialist.jpg",
    "email": "sanitahira7@gmail.com",
    "telephone": "+923224778268",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tahira-sani-3286b536b/",
      "https://wa.me/923224778268"
    ],
    "knowsAbout": [
      "Search Engine Optimization",
      "Technical SEO",
      "Local SEO",
      "E-commerce SEO",
      "Content Marketing",
      "Keyword Research",
      "SEO Analytics",
      "Search Visibility Strategy"
    ],
    "offers": {
      "@type": "Service",
      "name": "SEO Consulting Services",
      "description": "Professional SEO services including audits, optimization, and strategy development",
      "provider": {
        "@type": "Person",
        "name": "Tahira Sani"
      },
      "serviceType": "SEO Consulting",
      "areaServed": "Worldwide"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tahira Sani SEO Services",
    "description": "Professional SEO consulting services helping businesses improve search rankings and organic traffic",
    "url": "https://tahira-sani-seo.com",
    "telephone": "+923224778268",
    "email": "sanitahira7@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$",
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Tahira Sani - SEO Specialist & Search Visibility Strategist | Organic Traffic Growth Expert</title>
      <meta name="description" content="Tahira Sani - Expert SEO Specialist & Search Visibility Strategist. Helping businesses grow organic traffic 150%+ with data-driven SEO strategies. Get your free SEO audit today." />
      <meta name="keywords" content="SEO specialist, search visibility strategist, organic traffic growth, keyword ranking, SEO consultant, search engine optimization, technical SEO, local SEO, ecommerce SEO" />
      <meta name="author" content="Tahira Sani" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://tahira-sani-seo.com" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Tahira Sani - SEO Specialist & Search Visibility Strategist | Grow Organic Traffic 150%+" />
      <meta property="og:description" content="Expert SEO specialist helping businesses dominate search rankings and convert visitors into customers with proven SEO strategies. Free SEO audit available." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tahira-sani-seo.com" />
      <meta property="og:image" content="https://tahira-sani-seo.com/images/tahira-sani-seo-specialist.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Tahira Sani SEO" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tahira Sani - SEO Specialist & Search Visibility Strategist" />
      <meta name="twitter:description" content="Expert SEO specialist helping businesses grow organic traffic 150%+ with data-driven strategies." />
      <meta name="twitter:image" content="https://tahira-sani-seo.com/images/tahira-sani-seo-specialist.jpg" />
      <meta name="twitter:creator" content="@tahirasani" />
      <meta name="twitter:site" content="@tahirasani" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-title" content="Tahira Sani SEO" />
      <meta name="application-name" content="Tahira Sani SEO" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="theme-color" content="#667eea" />
    </Helmet>
  )
}

export default SEOHead