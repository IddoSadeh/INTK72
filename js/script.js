document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // --- Navigation Logic ---
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            const targetId = link.dataset.target;
            const targetContent = document.getElementById(targetId);

            // Update active state on links (for internal logic)
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show/hide content sections
            contentSections.forEach(section => {
                section.classList.add('hidden');
            });
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
});