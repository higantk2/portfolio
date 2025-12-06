console.log("Welcome to KINDOLL HYACINTH'S Portfolio");

// 1. Scroll Animations
const hiddenElements = document.querySelectorAll('.hero-content, .profile-image, .project-card, h2, .contact-wrapper, .cert-image');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// 2. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Check local storage for preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if(icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon'); icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun'); icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// 3. Typing Animation (Hero Section)
const heroSubtitle = document.querySelector('.typing-target');
if (heroSubtitle) {
    const textArray = ["Frontend Developer", "IT Student", "Creative Coder", "Problem Solver"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            heroSubtitle.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroSubtitle.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        heroSubtitle.classList.add('typing-text');

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Wait before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500); // Wait before typing next word
        } else {
            setTimeout(typeEffect, isDeleting ? 100 : 200); // Typing speed
        }
    }
    typeEffect();
}

// 4. Certificate Modal (Lightbox) Logic
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("img-full");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".cert-image");
const span = document.getElementsByClassName("close-modal")[0];

if (modal && images.length > 0) {
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// 5. Scroll Spy (Highlight Nav Links)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 6. Footer Year Update
const yearSpan = document.querySelector('footer p');
if (yearSpan) {
    yearSpan.innerHTML = `© ${new Date().getFullYear()} KINDOLL HYACINTH. All rights reserved.`;
}