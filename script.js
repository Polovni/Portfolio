const menu = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navigation');
let menuOpen = false;

menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        navbar.classList.add('active');
        menuOpen = true;
    } else {
        menu.classList.remove('open');
        navbar.classList.remove('active');
        menuOpen = false;
    }
});