export default function makeCenterItemCardsLeft () {
  // Const init
  let leftSliderElement = document.querySelector('#left');
  let centerSliderElement = document.querySelector('#center');
  let rightSliderElement = document.querySelector('#right');
  
  centerSliderElement.innerHTML = leftSliderElement.innerHTML;
}