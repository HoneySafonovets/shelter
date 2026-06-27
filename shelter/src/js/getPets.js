import randomArray from './randomArray';
import cardRender from './petsRenderFromData';
import modalWindowRender from './modal';

export default async function getsPets(path) {
  // Const init
  const mainSlider = document.querySelector('.friends__card-wrapper');
  
  // Get data from pets.JSON
  const response = await fetch(path);
  const data = await response.json();

  // Modules functions
  randomArray(data);
  cardRender(data, mainSlider);

  // Const vars for selectors in SLIDER
  const cardAnimalBtn = document.querySelectorAll('.friends__card');
  // Render modal
  modalWindowRender(data, cardAnimalBtn);
}