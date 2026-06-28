import randomArray from './randomArray';
import startRenderCard from './petsRenderFromData';
import modalWindowRender from './modal';
import getDataFromJSON from './getDataFromJSON';
import renderRightCards from './renderRightCards';
import renderLeftCards from './renderLeftCards';

export default async function getPetsStart(path) {
  // Const init
  const leftSliderElement = document.querySelector('.friends__card-wrapper-left');
  const centerSliderElement = document.querySelector('.friends__card-wrapper-center');
  const rightSliderElement = document.querySelector('.friends__card-wrapper-right');

  // Get data from pets.JSON
  const data = await getDataFromJSON(path);

  // Modules functions
  randomArray(data);
  renderLeftCards(path);
  startRenderCard(data, centerSliderElement);
  renderRightCards(path);

  const centerSliderElementItems = centerSliderElement.querySelectorAll('.friends__card');
  // console.log(centerSliderElementItems)
  // Const vars for selectors in SLIDER
  const cardAnimalBtn = document.querySelectorAll('.friends__card');
  // Render modal
  modalWindowRender(data, cardAnimalBtn);
}