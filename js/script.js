const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

var typed = new Typed(".typing", {
    strings: ["Portfol.io"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})