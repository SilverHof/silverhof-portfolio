const sr = ScrollReveal({duration: 2000, reset: true});

sr.reveal('.header', {
    delay: 200
})


sr.reveal('.about', {
    delay: 1000,
    easing: 'ease'
})

sr.reveal('.about__content', {
    delay: 2000,
    duration: 2000,
    scale: 0.6,
    easing: 'ease'
})

sr.reveal('.about__image-box', {
    delay: 1000,
    duration: 2000,
    scale: 1.4,
    easing: 'ease'
})

sr.reveal('.hard-skills', {
    duration: 3000,
    easing: 'ease'
})

sr.reveal('.soft-skills', {
    duration: 3000,
    easing: 'ease'
})

sr.reveal('.portfolio', {
    duration: 3000,
    easing: 'ease'
})

sr.reveal('.contacts', {
    duration: 3000,
    easing: 'ease'
})