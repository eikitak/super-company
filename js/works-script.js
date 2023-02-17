`use strict`;
{

    const navToggleBtn = () => {
        const navBtn = document.getElementById('nav-btn');
        navBtn.addEventListener('click', () => {
            document.querySelector('nav').classList.toggle('nav-active');
        });
    };
    navToggleBtn();


    const worksEffect = () => {
     
        gsap.from('.works-inner', {
            clipPath: 'inset(50%)',
            duration: .5,
            stagger: .3
        });
        gsap.from('.works-inner', {
            filter: 'hue-rotate(1440deg) blur(5px)',
            duration: 1,
            stagger: .3
        });
    }
    worksEffect();


}