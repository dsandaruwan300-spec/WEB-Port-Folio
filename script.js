// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all sections and elements to animate
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.work-card');
    const gridItems = document.querySelectorAll('.grid-item');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Add base classes for animation
    const allAnimatedElements = [...sections, ...cards, ...gridItems, ...timelineItems];
    
    allAnimatedElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
