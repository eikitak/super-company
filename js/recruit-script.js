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


    const recruitEffect = () => {
        gsap.from('.recruit-path', {
            clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
            duration: .5,
            scrollTrigger: {
                trigger: '.recruit-path',
                start: '40% 80%'
            }
        });
        gsap.to('.recruit-catch h2', {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1
        });
        gsap.to('.recruit-catch p', {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'linear',
            duration: .5,
            delay: .5,
            stagger: .2
        });
        gsap.from('.recruitment', {
            opacity: 0,
            scaleX: 0,
            duration: .5,
            scrollTrigger: {
                trigger: '.recruitment',
                start: 'top 80%',
            }
        });

    };
    recruitEffect();


}