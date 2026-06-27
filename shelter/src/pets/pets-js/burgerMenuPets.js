export default function mobileNavigation() {
  const burgerMenu = document.querySelector('.burger-menu'),
        navMenu = document.querySelector('.header__nav-pets'),
        petsBurgerMenu = document.querySelector('.pets-burger-menu'),
        shadowBody = document.querySelector('.shadow'),
        navItemMain = document.querySelectorAll('.header__list-item'),
        navPetsItemMain = document.querySelectorAll('.header-pets__list-item');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu-reverse')
    navMenu.classList.toggle('header__nav-mobile-pets');
    shadowBody.classList.toggle('shadow-show');
    document.body.classList.toggle('no-scroll');
  })

  navItemMain.forEach(e => {
    e.addEventListener('click', () => {
      burgerMenu.classList.remove('burger-menu-reverse')
      navMenu.classList.remove('header__nav-mobile-pets');
      shadowBody.classList.remove('shadow-show');
      document.body.classList.remove('no-scroll');
    })
  })

  navPetsItemMain.forEach(e => {
    e.addEventListener('click', () => {
      burgerMenu.classList.remove('burger-menu-reverse')
      navMenu.classList.remove('header__nav-mobile-pets');
      shadowBody.classList.remove('shadow-show');
      document.body.classList.remove('no-scroll');
    })
  })

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (
      !target.closest('.header__nav') &&
      !target.closest('.burger-menu') &&
      !target.closest('.friends__card')
    ) {
      burgerMenu.classList.remove('burger-menu-reverse')
      navMenu.classList.remove('header__nav-mobile-pets');
      shadowBody.classList.remove('shadow-show');
      document.body.classList.remove('no-scroll');
    }
  });
}