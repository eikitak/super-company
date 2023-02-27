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



    const companyEffect = () => {
        const cImg = document.querySelectorAll('.p-company img');
        cImg.forEach((el, i) => {
            if (i > 3) return;
            gsap.from(el, {
                y: -400,
                opacity: 0,
                duration: 1.5,
                delay: gsap.utils.random(0, .5),
                ease: 'bounce',
            });
        });
        gsap.from('.scale', {
            scale: 0,
            duration: 1.5,
            ease: 'bounce',
        });
        gsap.from('.p-company p', {
            y: 200,
            opacity: 0,
            duration: 1,
            delay: .5
        })
    }
    companyEffect();


}