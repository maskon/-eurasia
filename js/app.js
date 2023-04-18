
// Swiper //
const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // effect: 'fade',
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

let mySwiper1 = new Swiper(slider1, {

    loop: true,
    pagination: {
        el: '.pag-2',
        clickable: true,
    },
    breakpoints: {
    // mobile - 320-768
    320: {
      slidesPerView: 1.25,
      spaceBetween: 20,
      centeredSlides: true,
      effect: 'flip',
    },
    // desktop + tablet >= 768
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  }

});


// Табы //
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
                tabsHandler(tabsPath);
            }

            if (e.target.classList.contains('tabs__arrow--prev')) {
                let activeBtn = document.querySelector('.tabs__btn--active');
                let activeParent = activeBtn.closest('.tabs__item');
                let previousParent = activeParent.previousElementSibling;

                if (previousParent) {
                    let prevActive = previousParent.querySelector('.tabs__btn')
                    tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
                    prevActive.classList.add('tabs__btn--active');

                    let path = prevActive.dataset.tabsPath;
                    tabsHandler(path);
                }
            }

            if (e.target.classList.contains('tabs__arrow--next')) {
                let activeBtn = document.querySelector('.tabs__btn--active');
                let activeParent = activeBtn.closest('.tabs__item');
                let nextParent = activeParent.nextElementSibling;

                if (nextParent) {
                    let nextActive = nextParent.querySelector('.tabs__btn');
                    tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
                    nextActive.classList.add('tabs__btn--active');

                    let path = nextActive.dataset.tabsPath;
                    tabsHandler(path);
                }
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    };
});


// Кнопка "посмотреть еще" //
const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.products-grid__item').length;
let items = 3;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.products-grid').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === productsLength) {
        showMore.style.display = 'none';
    }
});


// Accordion //
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordion__control');
            const content = self.querySelector('.accordion__content');

            self.classList.toggle('open');

            // если открыт аккордеон
            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});


// Прокрутка при клике
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        /* if(burger.classList.contains('active')) {
            document.body.classList.remove('no-scroll');
            button.classList.remove('active');
            menu.classList.remove('active');
        } */

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Burger //
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;

document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  });
});



