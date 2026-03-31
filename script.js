// script.js

// Mobile Menu Toggle Hamburger Navigation
const mobileMenuToggle = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
});

// Smooth Scroll Behavior for Anchor Links
const anchorLinks = document.querySelectorAll('a[href*="#"]');

for (let link of anchorLinks) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
}

// Copy Email to Clipboard Function
const copyEmailBtn = document.querySelector('.copy-email');
const email = 'youremail@example.com'; // replace with actual email

copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    });
});

// Toast Notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Carousel for Projects Page
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));

// Intersection Observer for Animation on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => observer.observe(el));

// Error Handling
try {
    // Add your main application code here
} catch (error) {
    console.error('An error occurred:', error);
    showToast('An unexpected error occurred.');
}

// Browser Compatibility Check
if (!('fetch' in window)) {
    alert('Your browser does not support fetch. Please update your browser.');
}

// Analytics Logging
function logAnalytics(event) {
    console.log('Event logged:', event);
}

// Navigation Link Styling on Scroll
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    navLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === window.location.hash.substring(1)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
