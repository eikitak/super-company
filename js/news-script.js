`use strict`;
{

    const navToggleBtn = () => {
        const navBtn = document.getElementById('nav-btn');
        navBtn.addEventListener('click', () => {
            document.querySelector('nav').classList.toggle('nav-active');
        });
    };
    navToggleBtn();


    const newsEffect = () => {
        gsap.from('.page-news .news-right', {
            yPercent: 100,
            opacity: 0,
            duration: .5,
            stagger: .1,
            ease: 'power4.in'
        })
    };
    newsEffect();

}