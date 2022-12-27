// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuClose = document.querySelectorAll('.menu__inner__close'),
    menuCloseIcon = document.querySelectorAll('.menu__inner__close__icon'),
    menuItem = document.querySelectorAll('.menu__inner__wrap__list__item__link'),
    hamburger = document.querySelector('.header__wrap__content__hamburger'),
    bgMenu = document.querySelector('.bg-menu');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        bgMenu.classList.toggle('bg-menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            bgMenu.classList.toggle('bg-menu-active');
        });
    });

    // menuCloseIcon.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //         bgMenu.classList.toggle('bg-menu-active');
    //     });
    // });
  
    menuClose.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            bgMenu.classList.toggle('bg-menu-active');
        });
    });
});


// Header fixed
const hideNav = () => {
    const hiddenNavClassName = 'navigation__hidden';
    const fixedNavClassName = 'navigation__fixed';
    const headerHeight = 100;
    const navHeight = 600;
    let initialYvalue = window.scrollY;
    let body = document.querySelector('body');

    let isItHidden = false;
    let isItFixed = false;

    window.addEventListener('scroll', (ev) => {
        const scrollY = window.scrollY;
        if (scrollY > headerHeight) {
            makeItFixed();

            if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
                hide();
            } else {
                show();
            }
        } else {
            makeItNotFixed();
        }

        initialYvalue = scrollY;
    });

    function hide() {
        if (!isItHidden) {
            body.classList.add(hiddenNavClassName);
            isItHidden = true;
        }
    }

    function show() {
        if (isItHidden) {
            body.classList.remove(hiddenNavClassName);
            isItHidden = false;
        }
    }

    function makeItFixed() {
        if (!isItFixed) {
            body.classList.add(fixedNavClassName);
            isItFixed = true;
        }
    }

    function makeItNotFixed() {
        if (isItFixed) {
            body.classList.remove(fixedNavClassName);
            isItFixed = false;
        }
    }
}

hideNav()


// Glightbox
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});


// Tabs
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');   
        
    function hideTabContent() {
        tabsContent.forEach (item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item ) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});


// BeforeAfter Slider
const slider = document.querySelector('.gallery__wrap__swiper__inner__slide__before-after');
const before = document.querySelector('.gallery__wrap__swiper__inner__slide__before-after__before');
const beforeImage = before.querySelector('img');
const change = document.querySelector('.gallery__wrap__swiper__inner__slide__before-after__change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
	let width = slider.offsetWidth;
	beforeImage.style.width = `${width}px`;
});

change.addEventListener('mousedown', () => {
	isActive = true;
});

body.addEventListener('mouseup', () => {
	isActive = false;
});

body.addEventListener('mouseleave', () => {
	isActive = false;
});

const beforeAfterSlider = (x) => {
	let shift = Math.max(0, Math.min(x, slider.offsetWidth));
	before.style.width = `${shift}px`;
	change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
	e.stopPropagation();
	e.preventDefault();
	return false;
};

body.addEventListener('mousemove', (e) => {
	if (!isActive) {
		return;
	}

	let x = e.pageX;
	x -= slider.getBoundingClientRect().left;
	beforeAfterSlider(x);
	pauseEvents(e);
});

change.addEventListener('touchstart', () => {
	isActive = true;
});

body.addEventListener('touchend', () => {
	isActive = false;
});

body.addEventListener('touchcancel', () => {
	isActive = false;
});

body.addEventListener('touchmove', (e) => {
	if (!isActive) {
		return;
	}

  let x;
  
  let i;
  for (i = 0; e < e.changedTouches.length; i++) {
  	x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});