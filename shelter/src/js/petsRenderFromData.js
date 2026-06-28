export default function startRenderCard(
  data,
  centerElement,
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
};