console.log("Welcome to KINDOLL HYACINTH'S Portfolio");

// 1. Select all the elements we want to animate
const hiddenElements = document.querySelectorAll('.hero-content, .profile-image, .project-card, h2, .cert-image, .back-btn, .social-icon, .tag');

// 2. Create the "Observer" (The Security Camera)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the element is visible on the screen
        if (entry.isIntersecting) {
            // Add the 'show' class to make it visible
            entry.target.classList.add('show');
        } 
    });
});

// 3. Tell the observer to start watching our elements
hiddenElements.forEach((el) => {
    // First, we add the 'hidden' class to everything so they start invisible
    el.classList.add('hidden');
    // Then we tell the observer to watch them
    observer.observe(el);
});

// Auto-update the year in the footer
const yearSpan = document.querySelector('footer p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = `© ${currentYear} KINDOLL HYACINTH. All rights reserved.`;
}

console.log("Animations loaded and smooth!");