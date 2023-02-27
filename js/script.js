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


    const worksEffect = () => {
        // const inner = document.querySelectorAll('.works-inner');
        // inner.forEach(el => {
        //     gsap.timeline({ scrollTrigger: el })
        //         .from(el, {
        //             clipPath: 'inset(50%)',
        //             duration: .5,
        //         })
        //         .from(el, {
        //             filter: 'hue-rotate(1440deg) blur(5px)',
        //             duration: 1
        //         }, '<')
        // });
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





    const indexEffect = () => {
        gsap.from('.hero-text span', {
            opacity: 0,
            duration: .1,
            stagger: .15,
            delay: .3,
        });

        let colors = 0;
        const intervalId = setInterval(() => {
            colors++;
            if (colors > 10) clearInterval(intervalId);
            gsap.to('.hero-text span', {
                color: 'rgba(random(100,255,1), random(100,255,1), random(100,255,1))',
                duration: 0,
                stagger: .15,
                delay: .3,
            });
        }, 100);

      

        gsap.utils.toArray('.service-box img').forEach(img => {
            gsap.from(img, {
                yPercent: 100,
                opacity: 0,
                duration: .5,
                ease: 'linear',
                scrollTrigger: {
                    trigger: img,
                    start: 'top 105%'
                }
            });
        });
        gsap.utils.toArray('.service-box h3').forEach(h3 => {
            gsap.from(h3, {
                xPercent: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: h3,
                    start: 'top 100%'
                }
            });
        });
        gsap.utils.toArray('.service-box p').forEach(p => {
            gsap.from(p, {
                opacity: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: p,
                    start: 'top 90%'
                }
            });
        });
        gsap.to('#recruit img', {
            scale: 4,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            repeatDelay: .5
        });
        //無限スクロールするテキスト

        const text = document.querySelector('.scroll-text h3');
        gsap.to(text, {
            xPercent: -50,
            duration: 10,
            ease: 'linear',
            repeat: -1
        });
    }
    indexEffect();


    const target = '.splide';
    const options = {
        type: 'loop',
        arrows: false,
        pagination: false,
        perPage: 1,
        autoplay: true,
        speed: 2000,
        interval: 2800,
    }
    const mySplide = new Splide(target, options);

    mySplide.mount();

}