// ========================================
// Navigation Toggle & Smooth Scrolling
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Handle dropdown menu for mobile
    const navDropdown = document.querySelector('.nav-dropdown');
    if (navDropdown) {
        const dropdownLink = navDropdown.querySelector('.nav-link');
        const dropdownMenu = navDropdown.querySelector('.dropdown-menu');
        
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
    
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // Contact Form Handling
    // ========================================
    
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                requestType: document.getElementById('request-type').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.requestType || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission (replace with actual backend integration)
            console.log('Form submitted:', formData);
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.classList.add('show');
            
            // Reset form after 3 seconds
            setTimeout(function() {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.classList.remove('show');
            }, 5000);
            
            // In production, you would send this to a backend API:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                // Handle success
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your request. Please try again.');
            });
            */
        });
    }
    
    // ========================================
    // Newsletter Form Handling
    // ========================================
    
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate newsletter subscription
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Thank you for subscribing! You will receive our latest updates.');
            this.reset();
            
            // In production, send to backend:
            /*
            fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                alert('Thank you for subscribing!');
                newsletterForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error. Please try again.');
            });
            */
        });
    }
    
    // ========================================
    // Donation Form Handling
    // ========================================
    
    const donationForm = document.getElementById('donationForm');
    const amountButtons = document.querySelectorAll('.amount-btn');
    const donationAmountInput = document.getElementById('donation-amount');
    
    // Handle amount button clicks
    amountButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set amount or clear for custom
            const amount = this.dataset.amount;
            if (amount !== 'custom') {
                donationAmountInput.value = amount;
            } else {
                donationAmountInput.value = '';
                donationAmountInput.focus();
            }
        });
    });
    
    // Handle donation form submission
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                amount: document.getElementById('donation-amount').value,
                name: document.getElementById('donor-name').value,
                email: document.getElementById('donor-email').value,
                giftAid: document.getElementById('gift-aid').checked
            };
            
            // Validate amount
            if (!formData.amount || formData.amount < 1) {
                alert('Please enter a valid donation amount.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate donation processing
            console.log('Donation submitted:', formData);
            
            // Show success message
            alert(`Thank you ${formData.name} for your generous donation of £${formData.amount}! You will receive a confirmation email shortly.`);
            
            // Reset form
            donationForm.reset();
            amountButtons.forEach(btn => btn.classList.remove('active'));
            amountButtons[4].classList.add('active'); // Set custom as active
            
            // Track donation event
            trackEvent('Donation', 'Submit', `£${formData.amount}`);
        });
    }
    
    // ========================================
    // Testimony Form Handling
    // ========================================
    
    const testimonyForm = document.getElementById('testimonyForm');
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(testimonyForm);
            console.log('Testimony submitted');
            alert('Thank you for sharing your testimony! It will be reviewed and published soon.');
            testimonyForm.reset();
            trackEvent('Form', 'Submit', 'Testimony');
        });
    }
    
    // ========================================
    // Appointment Form Handling
    // ========================================
    
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(appointmentForm);
            console.log('Appointment booked');
            alert('Your appointment request has been received. We will confirm within 24 hours.');
            appointmentForm.reset();
            trackEvent('Form', 'Submit', 'Appointment');
        });
    }
    
    // ========================================
    // Newsletter Main Form Handling
    // ========================================
    
    const newsletterMainForm = document.getElementById('newsletterMainForm');
    if (newsletterMainForm) {
        newsletterMainForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(newsletterMainForm);
            console.log('Newsletter subscription');
            alert('Thank you for subscribing to our newsletter!');
            newsletterMainForm.reset();
            trackEvent('Form', 'Submit', 'Newsletter');
        });
    }
    
    // ========================================
    // Scroll Animations
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.event-card, .program-card, .pastor-card, .gallery-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ========================================
    // Event Banner Auto-Rotation
    // ========================================
    
    const bannerContent = document.querySelector('.banner-content');
    if (bannerContent) {
        let currentSlide = 0;
        const totalSlides = 3;
        const slideInterval = 5000; // 5 seconds
        
        function rotateBanner() {
            currentSlide = (currentSlide + 1) % totalSlides;
            const translateX = -(currentSlide * (100 / totalSlides));
            bannerContent.style.transform = `translateX(${translateX}%)`;
        }
        
        // Auto-rotate every 5 seconds
        setInterval(rotateBanner, slideInterval);
        
        // Optional: Add touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        const bannerScroll = document.querySelector('.banner-scroll');
        if (bannerScroll) {
            bannerScroll.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            bannerScroll.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                if (touchEndX < touchStartX - 50) {
                    // Swipe left
                    currentSlide = (currentSlide + 1) % totalSlides;
                } else if (touchEndX > touchStartX + 50) {
                    // Swipe right
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                }
                const translateX = -(currentSlide * (100 / totalSlides));
                bannerContent.style.transform = `translateX(${translateX}%)`;
            }
        }
    }
    
    // ========================================
    // Active Navigation Link Highlighting
    // ========================================
    
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ========================================
    // Lazy Loading for Images (when you add real images)
    // ========================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // Back to Top Button (optional enhancement)
    // ========================================
    
    // Create back to top button dynamically
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========================================
    // Performance Optimization
    // ========================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll handlers
    const debouncedHighlight = debounce(highlightNavigation, 100);
    window.addEventListener('scroll', debouncedHighlight);
    
    // ========================================
    // Accessibility Enhancements
    // ========================================
    
    // Trap focus in mobile menu when open
    if (navToggle && navMenu) {
        navToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.focus();
            }
        });
    }
    
    // Add ARIA labels dynamically
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent || 'Button');
        }
    });
    
    console.log('Prayer Power Network website initialized successfully! 🙏');
});

// ========================================
// Analytics Tracking (placeholder)
// ========================================

// Track page views
function trackPageView(page) {
    console.log('Page view:', page);
    // In production, integrate with Google Analytics 4 or similar:
    /*
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: page
        });
    }
    */
}

// Track events
function trackEvent(category, action, label) {
    console.log('Event:', category, action, label);
    // In production:
    /*
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    */
}

// Track form submissions
function trackFormSubmission(formType) {
    trackEvent('Form', 'Submit', formType);
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const buttonText = e.target.textContent;
        trackEvent('Button', 'Click', buttonText);
    }
});

// ========================================
// Service Worker Registration (for PWA - optional)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you create a service worker
        /*
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
        */
    });
}
