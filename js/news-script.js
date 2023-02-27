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