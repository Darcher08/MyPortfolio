/**
 * This script is used to identify the client current 
 * view section. 
 */ 
// Section.js
console.log('SC');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item');

const activeClasses = ['bg-gray-100', 'text-gray-900'];
const inactiveClasses = ['text-gray-600'];

const observerOptions = {
    root: null,
    threshold: 0.4,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting){
            console.log('Just got returned')
            return; // Solo actúa cuando algo entra
            } 
            
        const id = entry.target.getAttribute('id');

        navLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === `#${id}`;

            activeClasses.forEach((cls) => link.classList.toggle(cls, isCurrent));
            inactiveClasses.forEach((cls) => link.classList.toggle(cls, !isCurrent));
        });
    });
}, observerOptions);

sections.forEach((section) => observer.observe(section));