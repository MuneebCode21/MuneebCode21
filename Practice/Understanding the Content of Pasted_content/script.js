/**
 * LUMIÈRE - Premium Luxury JavaScript
 * Advanced Interactivity & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCustomCursor();
    initThemeToggle();
    initNavigation();
    initScrollAnimations();
    initFAQ();
    initContactForm();
    initParallax();
    initScrollProgress();
});

// --- Loading Screen ---
function initLoader() {
    const loader = document.querySelector('.loader');
    const loaderBar = document.querySelector('.loader-bar');
    
    if (!loader) return;

    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        loaderBar.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('fade-out');
                document.body.classList.remove('no-scroll');
            }, 500);
        }
    }, 200);
}

// --- Custom Cursor ---
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || window.innerWidth < 768) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    // Smooth follower movement
    function animateFollower() {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;
        
        follower.style.left = `${posX - 20}px`;
        follower.style.top = `${posY - 20}px`;
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .faq-question, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });
}

// --- Dark/Light Mode Toggle ---
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}

// --- Navigation ---
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.getElementById('back-to-top');

    // Sticky Nav on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/Hide Back to Top
        if (window.scrollY > 500) {
            backToTop?.classList.add('active');
        } else {
            backToTop?.classList.remove('active');
        }
    });

    // Mobile Menu Toggle
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn?.classList.remove('active');
            navLinks?.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Back to top click
    backToTop?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Scroll Reveal Animations ---
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text, .reveal-img');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// --- FAQ Accordion ---
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// --- Contact Form Validation ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModals = document.querySelectorAll('.close-modal, .close-modal-btn');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            const formGroup = input.parentElement;
            if (!input.value.trim()) {
                formGroup.classList.add('error');
                isValid = false;
            } else if (input.type === 'email' && !validateEmail(input.value)) {
                formGroup.classList.add('error');
                isValid = false;
            } else {
                formGroup.classList.remove('error');
            }
        });

        if (isValid) {
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                form.reset();
                successModal.classList.add('active');
                document.body.classList.add('no-scroll');
            }, 2000);
        }
    });

    // Remove error class on input
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('error');
        });
    });

    // Modal closing
    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            successModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// --- Parallax Effect ---
function initParallax() {
    const parallaxItems = document.querySelectorAll('.parallax-item');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxItems.forEach(item => {
            const speed = 0.1;
            const rect = item.getBoundingClientRect();
            const offset = rect.top + scrolled;
            const visible = (scrolled + window.innerHeight) > offset && scrolled < (offset + rect.height);
            
            if (visible) {
                const yPos = -(scrolled - offset) * speed;
                const img = item.querySelector('img');
                if (img) img.style.transform = `translateY(${yPos}px) scale(1.1)`;
            }
        });
    });
}

// --- Scroll Progress Indicator ---
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + "%";
    });
}
