// Interior Slider
var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      993: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      }
    }
});


// Team Slider
var swiper = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 25,
  slidesPerView: 5,
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    993: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    }
  }
});


// Discount Slider
var swiper = new Swiper(".mySwiper3", {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});


// Gallery Slider
var swiper = new Swiper(".mySwiper4", {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 1,
  simulateTouch: false,
  pagination: {
    el: ".swiper-pagination4",
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: false,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: false,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: false,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: true,
      noSwipingClass: 'gallery__wrap__swiper__inner__slide',
    }
  }
});


// Reviews Slider
var swiper = new Swiper(".mySwiper5", {
  loop: false,
  spaceBetween: 38,
  slidesPerView: 2,
  simulateTouch: false,
  pagination: {
    el: ".swiper-pagination5",
  },
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
});