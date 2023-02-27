`use strict`;
{
    gsap.timeline()
    .to('body', {
        opacity: 1,
        duration: .2,
        ease: 'power4.in'
    })
    .to('body', {
        backgroundColor: '#fff',
        duration: .2
    });

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