const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav-menu');
const logotype = document.querySelector('.logotype-block');
const navIcon = document.querySelector('.nav-icon span');

navIcon.addEventListener('click', () => {
    header.classList.toggle('header-pt_toggler');
    navMenu.classList.toggle('nav-menu_toggler');
    logotype.classList.toggle('nav-logotype_toggler');
    navIcon.classList.toggle('nav-icon_toggler');

    if(navMenu.classList.contains('nav-menu_toggler')) {
        navIcon.textContent = '×';
        navIcon.style.fontSize = '2rem';
        navIcon.style.opacity = '.45';
    } else {
        navIcon.textContent = '☰';
    }
})