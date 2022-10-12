function initAnimations() {
    const landingScrollTrigger = {
        trigger: '.navigation-anim-trigger',
        scrub: 0.5,
        start: 'top bottom',
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