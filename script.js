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

const enhance = id => {
    for(let i=0; i<=1; i++) {
        const element = document.getElementsByClassName("fancy")[i];
    text = element.innerText.split("");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        element.appendChild(span);
    });
    }
    
}

enhance("channel-link");