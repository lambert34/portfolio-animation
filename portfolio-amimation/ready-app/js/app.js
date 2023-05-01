

document.querySelectorAll('.slider').forEach((n, i) => {
    window['slider${i++}'] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75,
        slidesOffsetBefore: -125
    });
})