// 🚀 MODERN PORTFOLIO JAVASCRIPT - SMOOTH ANIMATIONS & INTERACTIONS 🚀

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== MOBILE NAVIGATION TOGGLE =====
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Update aria-expanded attribute
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ===== ANIMATED COUNTER FOR HERO STATS =====
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate counters when hero stats come into view
                if (entry.target.classList.contains('hero-stats')) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        animateCounter(stat, target);
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.hero-stats, .skill-category, .service-card, .project-card, .case-study-card, .workflow-step, .testimonial, .blog-card');
    animateElements.forEach(el => observer.observe(el));

    // ===== TYPING ANIMATION FOR HERO SEARCH BAR =====
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const searchQueries = [
            'SEO specialist near me',
            'increase website traffic',
            'improve search rankings',
            'technical SEO audit',
            'local SEO services',
            'keyword research tools'
        ];
        
        let queryIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const currentQuery = searchQueries[queryIndex];
            
            if (isDeleting) {
                typingText.textContent = currentQuery.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentQuery.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentQuery.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                queryIndex = (queryIndex + 1) % searchQueries.length;
                typeSpeed = 500; // Pause before next word
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        typeWriter();
    }

    // ===== NAVBAR BACKGROUND ON SCROLL =====
    const navbar = document.querySelector('.main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background when scrolled
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // ===== WHATSAPP FORM HANDLER =====
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const website = formData.get('website');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Create WhatsApp message
            let whatsappMessage = `Hi Tahira! I'm interested in your SEO services.\n\n`;
            whatsappMessage += `Name: ${name}\n`;
            whatsappMessage += `Email: ${email}\n`;
            if (website) whatsappMessage += `Website: ${website}\n`;
            if (service) whatsappMessage += `Service Needed: ${service}\n`;
            if (message) whatsappMessage += `Message: ${message}\n`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/923224778268?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
        });
    }

    // ===== SMOOTH HOVER EFFECTS FOR CARDS =====
    const cards = document.querySelectorAll('.service-card, .project-card, .case-study-card, .skill-category, .blog-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== PARALLAX EFFECT FOR HERO SECTION =====
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-visual');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    }

    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero elements
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // ===== SKILL PROGRESS ANIMATION =====
    const skillItems = document.querySelectorAll('.skills-list li');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        skillObserver.observe(item);
    });

    // ===== TESTIMONIAL SLIDER (if multiple testimonials) =====
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 3) {
        let currentTestimonial = 0;
        
        function showTestimonials() {
            testimonials.forEach((testimonial, index) => {
                if (index >= currentTestimonial && index < currentTestimonial + 3) {
                    testimonial.style.display = 'block';
                } else {
                    testimonial.style.display = 'none';
                }
            });
        }
        
        function nextTestimonials() {
            currentTestimonial = (currentTestimonial + 3) % testimonials.length;
            showTestimonials();
        }
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(nextTestimonials, 5000);
        showTestimonials();
    }

    // ===== PERFORMANCE OPTIMIZATION =====
    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    // Focus management for mobile menu
    const focusableElements = navMenu?.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    
    if (navToggle && focusableElements) {
        navToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // ===== SCROLL TO TOP BUTTON =====
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-gradient);
        color: white;
        border: none;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== FORM VALIDATION ENHANCEMENTS =====
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#f5576c';
                this.setAttribute('aria-invalid', 'true');
            } else {
                this.style.borderColor = '#43e97b';
                this.setAttribute('aria-invalid', 'false');
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(245, 87, 108)') {
                this.style.borderColor = '#e2e8f0';
                this.removeAttribute('aria-invalid');
            }
        });
    });

    // ===== PRELOADER (if needed) =====
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="spinner"></div>
            <p>Loading amazing content...</p>
        </div>
    `;
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 1;
        visibility: visible;
        transition: all 0.5s ease;
    `;
    
    // Add spinner styles
    const spinnerStyles = document.createElement('style');
    spinnerStyles.textContent = `
        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #e2e8f0;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .preloader-content {
            text-align: center;
            color: #64748b;
        }
    `;
    document.head.appendChild(spinnerStyles);
    
    // Show preloader initially
    document.body.appendChild(preloader);
    
    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });

    // ===== CONSOLE WELCOME MESSAGE =====
    console.log(`
    🎨 Welcome to Tahira Sani's Portfolio!
    ✨ Modern design with smooth animations
    🚀 Optimized for performance and accessibility
    💼 Professional SEO services available
    
    Interested in the code? Let's connect!
    📧 sanitahira7@gmail.com
    📱 +923224778268
    `);

});

// ===== ADDITIONAL CSS FOR JAVASCRIPT ENHANCEMENTS =====
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    /* Mobile Navigation Styles */
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 2rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            z-index: 999;
        }
        
        .nav-menu.active {
            transform: translateX(0);
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .nav-menu a {
            font-size: 1.2rem;
            padding: 1rem 2rem;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
    
    /* Navbar scroll effect */
    .main-nav.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: var(--shadow-md);
    }
    
    /* Animation classes */
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Loading state */
    body:not(.loaded) .hero-content > * {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    /* Scroll to top button hover */
    .scroll-to-top:hover {
        transform: translateY(-3px) scale(1.1);
        box-shadow: var(--shadow-xl);
    }
    
    /* Enhanced card hover effects */
    .service-card,
    .project-card,
    .case-study-card,
    .skill-category,
    .blog-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Form validation styles */
    input[aria-invalid="true"],
    textarea[aria-invalid="true"],
    select[aria-invalid="true"] {
        border-color: #f5576c !important;
        box-shadow: 0 0 0 3px rgba(245, 87, 108, 0.1) !important;
    }
    
    input[aria-invalid="false"],
    textarea[aria-invalid="false"],
    select[aria-invalid="false"] {
        border-color: #43e97b !important;
        box-shadow: 0 0 0 3px rgba(67, 233, 123, 0.1) !important;
    }
`;

document.head.appendChild(additionalStyles);