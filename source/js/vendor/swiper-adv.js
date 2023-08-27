const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        enabled: true,
        clickable: true
    },

    spaceBetween: 30,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        600: {
            slidesPerView: 2,
        },

        900: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
})


