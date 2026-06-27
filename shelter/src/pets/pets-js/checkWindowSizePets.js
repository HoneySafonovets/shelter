export default function checkWindowSize(
  burgerMenu,
  navMenu,
  shadowBody
  ) {
    window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      burgerMenu.classList.remove('burger-menu-reverse')
      navMenu.classList.remove('header__nav-mobile-pets');
      shadowBody.classList.remove('shadow-show');
      document.body.classList.remove('no-scroll');
    }
  });
}