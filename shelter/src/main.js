import './scss/main.scss';

console.log(`
1.Main page (45 points)
• Layout matches the design at 1280px +15
• Layout matches the design at 768px +15
• Layout matches the design at 320px +15
`);
let cardsArrayJSON = [];

fetch('./pets.json')
  .then(response => response.json())
  .then(data => {
    cardsArrayJSON = data;
    console.log(cardsArrayJSON);
});

