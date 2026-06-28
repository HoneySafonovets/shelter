import randomArray from "./randomArray";
import startRenderCard from "./petsRenderFromData";
import getDataFromJSON from "./getDataFromJSON";

export default async function renderRightCards (path) {
  // Get data from pets.JSON
  const data = await getDataFromJSON(path);

  // Random data
  randomArray(data);
  // console.log(data)
  const centerElement = document.querySelector('#center');

  document.querySelector('#right').innerHTML = '';
  const rightElement = document.querySelector('#right');
  // const rightData = data.slice(0, 3);
  // Render card in right item of SLider
  async function renderCard(
    data,
    centerElement
  ) {
    const centerArray = data.slice(0, 3);

    function addCardToItem(itemArray, item) {
      itemArray.forEach(e => {
        let card = `
          <article class="friends__card" data-name="#${e.name}">
            <img class="friends__card-img" src="${e.img}" alt="${e.name}">
            <h3 class="friends__card-title">${e.name}</h3>
            <button class="button">Learn more</button>
          </article>
        `;

        item.insertAdjacentHTML("beforeend", card)
      });
    }
  
    addCardToItem(centerArray, centerElement);
    
  }
  renderCard(data, rightElement);
}