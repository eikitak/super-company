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


    const serviceEffect = () => {
        document.querySelectorAll('.page-service-box img').forEach(sb => {
            gsap.from(sb, {
                xPercent: -100,
                opacity: 0,
                duration: .5,
                delay: .2,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: sb,
                    start: 'top 80%'
                }
            });
        });

        document.querySelectorAll('.service-img-wrap').forEach(sw => {
            gsap.from(sw, {
                xPercent: -100,
                opacity: 0,
                duration: .7,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: sw,
                    start: 'top 80%'
                }
            });
        });
    }
    serviceEffect();



}