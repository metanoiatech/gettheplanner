// Testimonial carousel
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function updateSlidePosition() {
    const testimonialWidth = testimonials[0].offsetWidth; // Get the width dynamically
    testimonialContainer.style.transform = `translateX(-${currentSlide * testimonialWidth}px)`;
}

// Move to the previous slide
prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    }
});

// Move to the next slide
nextButton.addEventListener('click', () => {
    if (currentSlide < testimonials.length - 1) {
        currentSlide++;
        updateSlidePosition();
    }
});

// Update the width on window resize
window.addEventListener('resize', updateSlidePosition);
// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Auto-rotate testimonials
let testimonialInterval;

function startTestimonialRotation() {
    testimonialInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
    }, 5000);
}

function stopTestimonialRotation() {
    clearInterval(testimonialInterval);
}

// Start/stop rotation on hover
testimonialContainer.addEventListener('mouseenter', stopTestimonialRotation);
testimonialContainer.addEventListener('mouseleave', startTestimonialRotation);

// Start rotation initially
startTestimonialRotation();
