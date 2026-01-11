// Optimized JavaScript with smooth form handling

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

// Enhanced typing animation
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

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
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

// Smooth scrolling
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

// Navigation effects
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
                
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.hero-stats, .service-card, .skill-category, .case-study-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Mobile navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Optimized form enhancements - no animation conflicts
function initFormEnhancements() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Smooth focus effects without animation conflicts
            input.addEventListener('focus', (e) => {
                e.target.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', (e) => {
                if (!e.target.value) {
                    e.target.parentElement.classList.remove('focused');
                }
            });
            
            // Real-time validation with debounce
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
    
    field.classList.remove('error', 'success');
    
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
    
    field.classList.add(isValid ? 'success' : 'error');
    return isValid;
}

// WhatsApp form submission handler
function handleWhatsAppFormSubmit(form, submitButton) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    
    if (!validateField(nameInput) || !validateField(emailInput)) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const website = formData.get('website') || 'Not provided';
    const service = formData.get('service') || 'Not specified';
    const message = formData.get('message') || 'No additional details provided';
    
    const whatsappMessage = `🌟 *New SEO Inquiry* 🌟

👤 *Name:* ${name}
📧 *Email:* ${email}
🌐 *Website:* ${website}
🎯 *Service Needed:* ${service}

💬 *Message:*
${message}

---
Sent from SEO Portfolio Website`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '923224778268';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Opening WhatsApp...';
    submitButton.disabled = true;
    
    window.open(whatsappURL, '_blank');
    
    setTimeout(() => {
        showNotification('WhatsApp opened! Please send the message to complete your inquiry.', 'success');
        form.reset();
        
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('focused');
        });
        
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1000);
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (form.id === 'whatsapp-form') {
        handleWhatsAppFormSubmit(form, submitButton);
        return;
    }
    
    // Default form handling for other forms
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
    
    showNotification('Form submitted successfully!', 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
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
    
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
    initSmoothScrolling();
    initNavigationEffects();
    initScrollAnimations();
    initMobileNavigation();
    initFormEnhancements();
    
    document.body.classList.add('loading');
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (state.animationId) {
        clearTimeout(state.animationId);
    }
});

// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                if (window.location.hostname === 'localhost') {
                    console.log('SW registered: ', registration);
                }
            })
            .catch(registrationError => {
                if (window.location.hostname === 'localhost') {
                    console.log('SW registration failed: ', registrationError);
                }
            });
    });
}