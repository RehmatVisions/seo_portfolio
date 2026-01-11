import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import SoftCTA from './components/SoftCTA/SoftCTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          {/* 🎯 ADVANCED SEO META TAGS 🎯 */}
          <title>Tahira Sani - SEO Specialist & Search Visibility Strategist | Organic Traffic Growth Expert</title>
          <meta name="description" content="Tahira Sani - Expert SEO Specialist & Search Visibility Strategist. Helping businesses grow organic traffic 150%+ with data-driven SEO strategies. Get your free SEO audit today." />
          <meta name="keywords" content="SEO specialist, search visibility strategist, organic traffic growth, keyword ranking, SEO consultant, search engine optimization, technical SEO, local SEO, ecommerce SEO" />
          <meta name="author" content="Tahira Sani" />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          
          {/* 🌐 OPEN GRAPH & SOCIAL MEDIA 🌐 */}
          <meta property="og:title" content="Tahira Sani - SEO Specialist & Search Visibility Strategist | Grow Organic Traffic 150%+" />
          <meta property="og:description" content="Expert SEO specialist helping businesses dominate search rankings and convert visitors into customers with proven SEO strategies. Free SEO audit available." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tahira-sani-seo.com" />
          <meta property="og:image" content="https://tahira-sani-seo.com/images/tahira-sani-seo-specialist.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Tahira Sani SEO" />
          <meta property="og:locale" content="en_US" />
          
          {/* 🐦 TWITTER CARDS 🐦 */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Tahira Sani - SEO Specialist & Search Visibility Strategist" />
          <meta name="twitter:description" content="Expert SEO specialist helping businesses grow organic traffic 150%+ with data-driven strategies." />
          <meta name="twitter:image" content="https://tahira-sani-seo.com/images/tahira-sani-se