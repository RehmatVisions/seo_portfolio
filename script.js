// Performance-optimized JavaScript with modern features

// Configuration
const CONFIG = {
    searchQueries: [
        "best SEO specialist",
        "organic traffic growth",
        "keyword ranking expert", 
        "SEO consultant near me",
        "search visibility strategist"
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseTime: 2000
};

// State management
let state = {
    currentQuery: 0,
    currentChar: 0,
    isDeleting: false,
    animationId: null
};

// Utility functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// Enhanced typing animation with better performance
function typeWriter() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const currentText = CONFIG.searchQueries[state.currentQuery];
    
    if (state.isDeleting) {
        typingElement.textContent = currentText.substring(0, state.currentChar - 1);
        state.currentChar--;
    } else {
        typingElement.textContent = currentText.substring(0, state.currentChar + 1);
        state.currentChar++;
    }
    
    let typeSpeed = state.isDeleting ? CONFIG.deleteSpeed : CONFIG.typeSpeed;
    
    if (!state.isDeleting && state.currentChar === currentText.length) {
        typeSpeed = CONFIG.pauseTime;
        state.isDeleting = true;
    } else if (state.isDeleting && state.currentChar === 0) {
        state.isDeleting = false;
        state.currentQuery = (state.currentQuery + 1) % CONFIG.searchQueries.length;
        typeSpeed = 500;
    }
    
    state.animationId = setTimeout(typeWriter, typeSpeed);
}

// Optimized counter animation with Intersection Observer
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        requestAnimationFrame(updateCounter);
    });
}

// Smooth scrolling with better performance
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced navigation scroll effect
function initNavigationEffects() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;
    
    const handleScroll = throttle(() => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, 16);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Trigger counter animation for stats
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters();
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.hero-stats, .service-card, .skill-category, .case-study-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Mobile navigation toggle
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Form enhancement
function initFormEnhancements() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Add floating label effect
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Real-time validation
            input.addEventListener('input', debounce(() => {
                validateField(input);
            }, 300));
        });
        
        // Form submission
        form.addEventListener('submit', handleFormSubmit);
    });
}

// Field validation
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    
    // Remove existing error states
    field.classList.remove('error', 'success');
    
    // Validation rules
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    } else if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    } else if (type === 'url' && value) {
        try {
            new URL(value);
        } catch {
            isValid = false;
        }
    }
    
    // Apply visual feedback
    field.classList.add(isValid ? 'success' : 'error');
    
    return isValid;
}

// Form submission handler
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Check if this is the WhatsApp form
    if (form.id === 'whatsapp-form') {
        handleWhatsAppFormSubmit(form, submitButton);
        return;
    }
    
    const formData = new FormData(form);
    
    // Validate all fields
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isFormValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        form.reset();
        
        // Remove focused states
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('focused');
        });
        
    } catch (error) {
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// WhatsApp form submission handler
function handleWhatsAppFormSubmit(form, submitButton) {
    // Validate required fields
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    
    if (!validateField(nameInput) || !validateField(emailInput)) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const website = formData.get('website') || 'Not provided';
    const service = formData.get('service') || 'Not specified';
    const message = formData.get('message') || 'No additional details provided';
    
    // Format WhatsApp message
    const whatsappMessage = `🌟 *New SEO Inquiry* 🌟

👤 *Name:* ${name}
📧 *Email:* ${email}
🌐 *Website:* ${website}
🎯 *Service Needed:* ${service}

💬 *Message:*
${message}

---
Sent from SEO Portfolio Website`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '923224778268'; // Your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Opening WhatsApp...';
    submitButton.disabled = true;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setTimeout(() => {
        showNotification('WhatsApp opened! Please send the message to complete your inquiry.', 'success');
        form.reset();
        
        // Remove focused states
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('focused');
        });
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px'
    });
    
    // Set background color based on type
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            // Log metrics only in development
            if (window.location.hostname === 'localhost') {
                getCLS(console.log);
                getFID(console.log);
                getFCP(console.log);
                getLCP(console.log);
                getTTFB(console.log);
            }
        });
    }
    
    // Log page load time only in development
    if (window.location.hostname === 'localhost') {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }
}

// Lazy loading for images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    typeWriter();
    initSmoothScrolling();
    initNavigationEffects();
    initScrollAnimations();
    initMobileNavigation();
    initFormEnhancements();
    initLazyLoading();
    
    // Performance monitoring (development only)
    if (window.location.hostname === 'localhost') {
        initPerformanceMonitoring();
    }
    
    // Add loading class to body for fade-in effect
    document.body.classList.add('loading');
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (state.animationId) {
        clearTimeout(state.animationId);
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                // Only log in development
                if (window.location.hostname === 'localhost') {
                    console.log('SW registered: ', registration);
                }
            })
            .catch(registrationError => {
                // Only log in development
                if (window.location.hostname === 'localhost') {
                    console.log('SW registration failed: ', registrationError);
                }
            });
    });
}