document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const headerHeight = header.offsetHeight;

    // --- Subtle Header Shadow/Border on Scroll ---
    // Gives the header more definition once the user starts scrolling past the hero.
    function updateHeaderAppearance() {
        const scrollPosition = window.scrollY;
        
        // Check if the user has scrolled past the hero section
        if (scrollPosition > hero.offsetHeight - headerHeight) {
            header.style.borderBottom = '1px solid var(--border-color)';
        } else if (scrollPosition > 0) {
            // Give a hint of border when scrolling, but remove near the top of hero
            header.style.borderBottom = '1px solid var(--border-color)';
        } else {
            header.style.borderBottom = 'none'; // Remove border when at the very top
        }
    }

    // Initial check and event listener
    updateHeaderAppearance();
    window.addEventListener('scroll', updateHeaderAppearance);


    // --- Smooth Scroll Polyfill/Enhancement (optional) ---
    // Ensures smooth scrolling for anchor links (though modern CSS handles this)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#home') {
                 window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                 // Fallback smooth scroll logic for other sections if you had them
                 // For now, we'll focus on the 'Home' hash
            }
        });
    });

    console.log("Starlight Clinic Homepage JS Loaded.");
});
