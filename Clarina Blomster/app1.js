const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const formmoab = document.getElementById('msform');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = ''
                formmoab.style.zIndex = '1';
            } else {
                formmoab.style.zIndex = '-3';
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });
}

navSlide();
