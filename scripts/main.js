// Script to add interactivity if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.maxHeight === '300px') {
        navLinks.style.maxHeight = '0';
    } else {
        navLinks.style.maxHeight = '300px';
    }
}

