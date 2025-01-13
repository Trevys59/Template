document.addEventListener("DOMContentLoaded", () => {
    // Initialisation des fonctionnalités après le chargement de la page
    initSmoothScroll();
    initBackToTopButton();
    initContactForm();
    initScrollAnimations();
});

// Fonction pour gérer le défilement fluide vers les ancres
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}


// Fonction pour gérer les animations au défilement
function initScrollAnimations() {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}