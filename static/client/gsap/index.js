function initAnimations() {
    const landingScrollTrigger = {
        trigger: '.navigation-anim-trigger',
        scrub: 0.5,
        start: 'top 65%',
        stop: 'bottom 90%'
    }

    function nav() {
        gsap.to('nav',
            {
                height: 90,
                duration: 0.5,
                "--bg-color": "rgba(255, 255, 255, 1)",
                scrollTrigger: landingScrollTrigger
            })

        // gsap.to('.book-now-btn',
        //     {
        //         duration: 0.5,
        //         "--display": "inline",
        //         scrollTrigger: {
        //             trigger: '.book-now-btn',
        //             // start: 'top 20%',
        //             // stop: 'bottom 20%',
        //             markers: true
        //         },
        //         onComplete: () => {

        //         }
        //     })
    }

    function landingImage() {
        gsap.to('.landing-banner img',
            {
                duration: 0.5,
                scale: 1.1,
                scrollTrigger: landingScrollTrigger
            })
    }

    nav();
    landingImage();
}
