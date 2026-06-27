import randomArray from './randomArrayPets';
import cardRender from './petsRenderFromData';
import modalWindowRender from './modal-pets';

export default async function getsPetsFromPetsPage(path) {
  // Const init
  const petsSlider = document.querySelector('.pets__slider');
  
  // Get data from pets.JSON
  const response = await fetch(path);
  const data = await response.json();

  // Modules functions
  randomArray(data);
  cardRender(data, petsSlider);

  // Const vars for selectors in SLIDER
  const cardAnimalBtn = document.querySelectorAll('.friends__card');
  // Render modal
  modalWindowRender(data, cardAnimalBtn);
  
  return data;
}