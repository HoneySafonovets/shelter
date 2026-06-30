import renderRightCards from "./renderRightCards";
import renderLeftCards from "./renderLeftCards";
import makeCenterItemCardsRight from "./makeCenterItemCardsRight";
import makeCenterItemCardsLeft from "./makeCenterItemCardsLeft";
import newModal from "./newModal";

export default function sliderMoveMain(righSliderItem) {
  const btnLeft = document.querySelector('#arrow-left');
  const btnRight = document.querySelector('#arrow-right');
  const slider = document.querySelector('#slider');

  // Media size
  const media = window.matchMedia('min-wdth: 768px');
  const media1241 = window.matchMedia('(min-width: 320px) and (max-width: 1241px)');
  const media320 = window.matchMedia('(max-width: 320px)');

  function moveLeft () {
    let currentSlide = document.querySelector('.friends__slider');
    
    renderLeftCards('../pets.json');
    newModal('../pets.json');
    slider.classList.add('friends__slider-move-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
  };

  function moveRight () {
    let currentSlide = document.querySelector('.friends__slider');
    
    renderRightCards('../pets.json');
    newModal('../pets.json');

    if (media1241.matches) {
      slider.classList.add('friends__slider-move-right-767');
      btnLeft.removeEventListener('click', moveLeft);
      btnRight.removeEventListener('click', moveRight);
      console.log('Work')
    } else if (media320.matches) {
      slider.classList.add('friends__slider-move-right-320');
      btnLeft.removeEventListener('click', moveLeft);
      btnRight.removeEventListener('click', moveRight);
      
    } else {
      slider.classList.add('friends__slider-move-right');
      btnLeft.removeEventListener('click', moveLeft);
      btnRight.removeEventListener('click', moveRight);
    };
  };
 
  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);

  slider.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'slideLeft') {
      slider.classList.remove('friends__slider-move-left');
      slider.classList.remove('friends__slider-move-left-767');
      slider.classList.remove('friends__slider-move-left-320');
      makeCenterItemCardsLeft();
    } else {
      slider.classList.remove('friends__slider-move-right');
      slider.classList.remove('friends__slider-move-right-767');
      slider.classList.remove('friends__slider-move-right-320');
      makeCenterItemCardsRight();
    }
    
    
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
  });
}