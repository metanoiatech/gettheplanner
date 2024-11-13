const testimonialContainer = document.querySelector('.testimonial-container');
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const testimonialsToShow = 3; // Number of testimonials to show at a time
const totalTestimonials = testimonials.length;

// Calculate the last starting index where three testimonials are visible
const lastSlideIndex = totalTestimonials - testimonialsToShow;
let currentSlide = 0;

function updateSlidePosition() {
    const testimonialWidth = testimonials[0].offsetWidth; // Get the width dynamically
    testimonialContainer.style.transform = `translateX(-${currentSlide * testimonialWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentSlide >= lastSlideIndex) {
        // Reset to the first slide when the last three testimonials are visible
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    if (currentSlide === 0) {
        // Move to the last position where three testimonials are visible
        currentSlide = lastSlideIndex;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
});
// Auto-rotate testimonials in a loop
let testimonialInterval;

function startTestimonialRotation() {
    testimonialInterval = setInterval(() => {
        if (currentSlide >= lastSlideIndex) {
            // Reset to the first slide when the last three testimonials are visible
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlidePosition();
    }, 3000); // Adjust the interval duration as needed
}
function stopTestimonialRotation() {
    clearInterval(testimonialInterval);
}

// Start/stop rotation on hover
testimonialContainer.addEventListener('mouseenter', stopTestimonialRotation);
testimonialContainer.addEventListener('mouseleave', startTestimonialRotation);

// Start rotation initially
startTestimonialRotation();

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
