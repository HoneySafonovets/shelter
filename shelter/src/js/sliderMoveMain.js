import renderRightCards from "./renderRightCards";
import renderLeftCards from "./renderLeftCards";
import makeCenterItemCardsRight from "./makeCenterItemCardsRight";
import makeCenterItemCardsLeft from "./makeCenterItemCardsLeft";
import newModal from "./newModal";

export default function sliderMoveMain(righSliderItem) {
  const btnLeft = document.querySelector('#arrow-left');
  const btnRight = document.querySelector('#arrow-right');
  const slider = document.querySelector('#slider');

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
    slider.classList.add('friends__slider-move-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
  };
 
  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);

  slider.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'slideLeft') {
      slider.classList.remove('friends__slider-move-left');
      makeCenterItemCardsLeft();
    } else {
      slider.classList.remove('friends__slider-move-right');
      makeCenterItemCardsRight();
    }
    
    
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
  });
}