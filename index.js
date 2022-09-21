const page = document.querySelector('.page')
const navOpen = document.querySelector('.nav__bar')
const header__navMobile = document.querySelector('.header__nav-mobile')
const navLink = document.querySelectorAll('.header__nav-item a')


navOpen.addEventListener('click', () => {
    navOpen.classList.toggle('nav__bar_open');
    page.classList.toggle('page__overflow_hidden');
    header__navMobile.classList.toggle('header__nav-mobile_open');
    
})

navLink.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        navOpen.classList.remove('nav__bar_open');
        page.classList.remove('page__overflow_hidden');
        header__navMobile.classList.remove('header__nav-mobile_open');

        const blockID = element.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
    })
})