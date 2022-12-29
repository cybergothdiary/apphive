const navMenu = document.querySelector('.nav-menu');
const navIcon = document.querySelector('.nav-icon span');

navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_toggler');
})