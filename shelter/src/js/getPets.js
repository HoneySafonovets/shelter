import randomArray from './randomArray';
import cardRender from './petsRenderFromData';

export default async function getsPets(path) {
  // Const init
  const mainSlider = document.querySelector('.friends__card-wrapper');
  // Get data from pets.JSON
  const response = await fetch(path);
  const data = await response.json();

  // Modules functions
  randomArray(data);
  cardRender(data, mainSlider);
}