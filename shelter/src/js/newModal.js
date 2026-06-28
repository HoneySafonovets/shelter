import getDataFromJSON from "./getDataFromJSON";
import randomArray from "./randomArray";
import modalWindowRender from "./modal";

export default async function newModal(path) {
  const data = await getDataFromJSON(path);

  const modalArray = document.querySelectorAll('.modal');

  modalArray.forEach((e) => {
    e.remove();
  })

  // Create new Array data names
  const cardsArray = document.querySelector('#center').querySelectorAll('.friends__card');
  const dataNamesArray = [];
  const newData = [];
  // console.log(dataNamesArray);
  cardsArray.forEach((e) => {
    dataNamesArray.push(e.dataset.name)
  });

  console.log(dataNamesArray)
  // New data
  data.forEach((e) => {
    if (`#${e.name}` !== dataNamesArray[0] && `#${e.name}` !== dataNamesArray[1] && `#${e.name}` !== dataNamesArray[2]) {
      newData.push(e);
    }
  })

  const cardAnimalBtn = document.querySelector('#right').querySelectorAll('.friends__card')
  modalWindowRender(newData, cardAnimalBtn);
};