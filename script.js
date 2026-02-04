// PIOST Inc. - Interactive Website Scripts
// Enhanced with animations and interactive effects

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // Scroll Progress Indicator
    // ============================================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // ============================================
    // Navbar scroll effect
    // ============================================
    const navbar = document.querySelector('.navbar');

    function handleScroll() {
        // Navbar effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ============================================
    // Smooth scrolling for navigation links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
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

    // ============================================
    // Mobile menu toggle
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // ============================================
    // Enhanced Intersection Observer with stagger
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Staggered animation for grid items
    function animateGrid(entries, gridSelector) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.animate-item');
                items.forEach((item, index) => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                    item.classList.add('visible');
                });
            }
        });
    }

    // Section reveal observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-animate');
        sectionObserver.observe(section);
    });

    // Card animation observer
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to all card types with stagger
    const cardSelectors = [
        '.about-card', '.stat-card', '.tech-card', '.solution-card',
        '.milestone-card', '.team-member', '.timeline-item',
        '.program-category', '.pillar-column', '.use-case-card',
        '.job-card', '.hope-card'
    ];

    document.querySelectorAll(cardSelectors.join(', ')).forEach((el, index) => {
        el.classList.add('card-animate');
        el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        cardObserver.observe(el);
    });

    // ============================================
    // Parallax effect for hero
    // ============================================
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroBg = document.querySelector('.hero-bg');

    window.addEventListener('scroll', () => {
        if (hero && window.scrollY < window.innerHeight) {
            const scrolled = window.scrollY;
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / 700);
            }
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    });

    // ============================================
    // Mouse move effect on hero
    // ============================================
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = hero.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            const particles = document.querySelector('.hero-particles');
            if (particles) {
                particles.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            }
        });
    }

    // ============================================
    // Tilt effect on cards
    // ============================================
    const tiltCards = document.querySelectorAll('.stat-card, .solution-card, .team-member, .use-case-card, .job-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ============================================
    // Magnetic button effect
    // ============================================
    const magneticBtns = document.querySelectorAll('.btn, .contact-btn, .investor-btn, .job-apply');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // ============================================
    // Typing effect for hero title
    // ============================================
    const heroLines = document.querySelectorAll('.hero-line');
    heroLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(30px)';

        setTimeout(() => {
            line.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });

    // ============================================
    // Animate statistics numbers
    // ============================================
    function animateValue(element, start, end, duration, suffix = '') {
        const startTimestamp = performance.now();
        const step = (timestamp) => {
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * (end - start) + start);

            const unitEl = element.querySelector('.stat-unit');
            if (unitEl) {
                const unitHtml = unitEl.outerHTML;
                element.innerHTML = current + unitHtml;
            } else {
                element.textContent = current + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }

    // Observe stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent.trim();
                const num = parseFloat(text);
                if (!isNaN(num)) {
                    let suffix = '';
                    if (text.includes('x')) suffix = 'x';
                    else if (text.includes('+')) suffix = '+';

                    animateValue(entry.target, 0, num, 2000, suffix);
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => statObserver.observe(num));

    // Stat values
    const statValues = document.querySelectorAll('.stat-value');
    const statValueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent.trim();
                const num = parseInt(text);
                if (!isNaN(num)) {
                    let suffix = text.includes('+') ? '+' : '';
                    animateValue(entry.target, 0, num, 1500, suffix);
                }
                statValueObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(val => statValueObserver.observe(val));

    // ============================================
    // Timeline animation
    // ============================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('timeline-visible');
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach((item, index) => {
        item.style.setProperty('--delay', `${index * 0.2}s`);
        timelineObserver.observe(item);
    });

    // ============================================
    // Cursor glow effect
    // ============================================
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursorGlow.style.left = cursorX + 'px';
        cursorGlow.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // ============================================
    // Dynamic styles
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
        /* Scroll Progress Bar */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #e11d48, #fb7185);
            z-index: 9999;
            transition: width 0.1s ease;
        }

        /* Cursor Glow */
        .cursor-glow {
            position: fixed;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(225, 29, 72, 0.08) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 0;
            transition: opacity 0.3s ease;
        }

        /* Section animations */
        .section-animate {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .section-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Card animations */
        .card-animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
        }

        .card-animate.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Timeline animations */
        .timeline-item {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.6s ease var(--delay, 0s), transform 0.6s ease var(--delay, 0s);
        }

        .timeline-visible {
            opacity: 1;
            transform: translateX(0);
        }

        /* Mobile menu */
        .nav-menu.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            padding: 1.5rem;
            gap: 1rem;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .nav-menu.active a {
            color: #0f172a !important;
        }

        .mobile-menu-btn span {
            transition: all 0.3s ease;
        }

        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Hover lift effect */
        .stat-card, .solution-card, .team-member, .use-case-card, .job-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        /* Button hover glow */
        .btn-primary:hover, .investor-btn:hover, .contact-btn:hover {
            box-shadow: 0 0 30px rgba(225, 29, 72, 0.4);
        }

        /* Hide cursor glow on mobile */
        @media (max-width: 768px) {
            .cursor-glow {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // Console branding
    // ============================================
    console.log('%cPIOST Inc.', 'color: #e11d48; font-size: 24px; font-weight: bold;');
    console.log('%cThermal Energy Storage Solutions', 'color: #0f172a; font-size: 14px;');
    console.log('%c🔥 Accelerating Carbon Neutrality Through Heat', 'color: #475569; font-size: 12px;');
});
