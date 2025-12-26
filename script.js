// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Collapsible sections
// Sections are static now; toggling removed.

// Email dropdown toggle
const emailToggle = document.querySelector('.email-toggle');
if (emailToggle) {
    emailToggle.addEventListener('click', function () {
        const dropdown = this.nextElementSibling;
        if (dropdown && dropdown.classList.contains('email-dropdown')) {
            dropdown.classList.toggle('show');
        }
    });
}

// Profile image click effect
const avatar = document.querySelector('.avatar');
if (avatar) {
    avatar.addEventListener('click', function () {
        this.style.animation = 'spin 0.6s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotateY(0deg) scale(1.05); }
        50% { transform: rotateY(180deg) scale(1.1); }
        100% { transform: rotateY(360deg) scale(1.05); }
    }
`;
document.head.appendChild(style);