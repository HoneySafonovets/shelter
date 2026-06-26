import './scss/main.scss';
import getPets from './js/getPets';
import cardRender from './js/petsRenderFromData';

console.log(`
1.Main page (45 points)
• Layout matches the design at 1280px +15
• Layout matches the design at 768px +15
• Layout matches the design at 320px +15
`);
let cardsArrayJSON = [];

getPets('./pets.json');

