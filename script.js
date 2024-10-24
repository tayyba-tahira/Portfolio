// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = document.querySelectorAll('.mobile-menu ul li a');

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
    });

    close.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });
});
