// 1. Dark Mode Toggle Logic
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check if user has a preference saved in their browser
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

function toggleTheme() {
    let theme = body.getAttribute('data-theme');
    
    if (theme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Offset for the fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// 3. Simple Form Submission Alert
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you, Harmandeep! Your message has been sent successfully.");
        contactForm.reset();
    });
}
