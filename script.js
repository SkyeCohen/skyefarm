// Image Carousel Functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel .carousel-images img'); // Updated selector
const totalImages = images.length;

// Function to change the slide
function changeSlide(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    currentIndex = (currentIndex + direction + totalImages) % totalImages; // Loop around
    const translateX = -currentIndex * 100; // Calculate translation
    carouselImages.style.transform = `translateX(${translateX}%)`; // Apply translation
}


// Automatic slide rotation
setInterval(() => {
    changeSlide(1);
}, 3000); // Change image every 3 seconds

// Initialize the first image
images[currentIndex].classList.add('active');

// FAQ Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('show'); // Toggle the answer visibility
        });
    });
});

// Testimonials Carousel Functionality
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

// Function to show testimonial based on index
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active'); // Hide all testimonials
        if (i === index) {
            testimonial.classList.add('active'); // Show the current testimonial
        }
    });
}

// Set up event listeners for buttons
document.querySelector('#testimonials .next').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials; // Move to the next testimonial
    showTestimonial(currentTestimonialIndex);
});

document.querySelector('#testimonials .prev').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials; // Move to the previous testimonial
    showTestimonial(currentTestimonialIndex);
});

// Show the first testimonial initially
showTestimonial(currentTestimonialIndex);
