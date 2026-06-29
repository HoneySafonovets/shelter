import newModal from "./newModal";

export default function makeCenterItemCardsRight () {
  // Const init
  let leftSliderElement = document.querySelector('#left');
  let centerSliderElement = document.querySelector('#center');
  let rightSliderElement = document.querySelector('#right');
  
  centerSliderElement.innerHTML = rightSliderElement.innerHTML;
  // rightSliderElement.innerHTML = '';
  newModal('../pets.json');
}