import"./main-DoUNKQ1g.js";function e(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}function t(e,t){e.forEach(e=>{let n=`
      <article class="friends__card" data-name="#${e.name}">
        <img class="friends__card-img" src="../.${e.img}" alt="${e.name}">
        <h3 class="friends__card-title">${e.name}</h3>
        <button class="button">Learn more</button>
      </article>
    `;t.insertAdjacentHTML(`beforeend`,n)})}function n(e,t){e.forEach(e=>{let t=`
        <div class="modal" id="${e.name}">
            <div class="modal__content">
              <button class="modal__close-item">
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path  class="path-fill"  clip-rule="evenodd" 
                  d="M7.42618 6.00003L11.7046 1.72158C12.0985 
                  1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 
                  10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 
                  0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 
                  -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 
                  10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 
                  1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 
                  12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 
                  10.2785L7.42618 6.00003Z"  />
                </svg>
              </button>
              <img class="modal__img" src="../.${e.img}" alt=${e.name}>
              <div class="modal__info">
                <div class="modal__info-name">
                  <h3 class="modal__info-title">${e.name}</h3>
                  <h4 class="modal__info-subtitle">${e.type} - ${e.breed}</h4>
                </div>
                <p class="modal__info-text">
                  ${e.description}
                </p>
                <ul class="modal__info-list">
                  <li class="modal__info-item"><span>Age:</span> ${e.age}</li>
                  <li class="modal__info-item"><span>Inoculations:</span> ${e.inoculations.map(e=>` ${e}`)}</li>
                  <li class="modal__info-item"><span>Diseases:</span> ${e.diseases.map(e=>` ${e}`)}</li>
                  <li class="modal__info-item"><span>Parasites:</span> ${e.parasites.map(e=>` ${e}`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;document.body.insertAdjacentHTML(`beforeend`,t)}),t=document.querySelectorAll(`.friends__card`),t.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-name`),n=document.querySelector(t);n.classList.add(`modal-active`),document.body.classList.add(`no-scroll`),document.querySelectorAll(`.modal__close-item`).forEach(e=>{e.addEventListener(`click`,()=>{n.classList.remove(`modal-active`),document.body.classList.remove(`no-scroll`)})}),n.addEventListener(`click`,e=>{e.target.closest(`.modal__content`)||(n.classList.remove(`modal-active`),document.body.classList.remove(`no-scroll`))})})})}async function r(r){let i=document.querySelector(`.pets__slider`),a=await(await fetch(r)).json();return e(a),t(a,i),n(a,document.querySelectorAll(`.friends__card`)),a}function i(e,t,n){window.addEventListener(`resize`,()=>{window.innerWidth>767&&(e.classList.remove(`burger-menu-reverse`),t.classList.remove(`header__nav-mobile-pets`),n.classList.remove(`shadow-show`),document.body.classList.remove(`no-scroll`))})}function a(){let e=document.querySelector(`.burger-menu`),t=document.querySelector(`.header__nav-pets`);document.querySelector(`.pets-burger-menu`);let n=document.querySelector(`.shadow`),r=document.querySelectorAll(`.header__list-item`),a=document.querySelectorAll(`.header-pets__list-item`);i(e,t,n),e.addEventListener(`click`,()=>{e.classList.toggle(`burger-menu-reverse`),t.classList.toggle(`header__nav-mobile-pets`),n.classList.toggle(`shadow-show`),document.body.classList.toggle(`no-scroll`)}),r.forEach(r=>{r.addEventListener(`click`,()=>{e.classList.remove(`burger-menu-reverse`),t.classList.remove(`header__nav-mobile-pets`),n.classList.remove(`shadow-show`),document.body.classList.remove(`no-scroll`)})}),a.forEach(r=>{r.addEventListener(`click`,()=>{e.classList.remove(`burger-menu-reverse`),t.classList.remove(`header__nav-mobile-pets`),n.classList.remove(`shadow-show`),document.body.classList.remove(`no-scroll`)})}),document.addEventListener(`click`,r=>{let i=r.target;!i.closest(`.header__nav`)&&!i.closest(`.burger-menu`)&&!i.closest(`.friends__card`)&&(e.classList.remove(`burger-menu-reverse`),t.classList.remove(`header__nav-mobile-pets`),n.classList.remove(`shadow-show`),document.body.classList.remove(`no-scroll`))})}a(),r(`../../pets.json`),console.log(`
1.Burger menu (25 points)
• The menu opens by clicking the burger icon +5
• The menu opens with a smooth animation +5
• The burger icon transforms into a close icon when the menu is open +5
• The menu closes when clicking the close icon, the overlay area outside the menu, or any navigation link inside it +5
• The page behind the menu does not scroll while the menu is open +5
2.Infinite carousel slider on Main (40 points)
• The slider displays the correct number of cards per breakpoint: 3 / 2 / 1 +5
• The slider has working left and right arrow controls +5
• After a switch, the next group contains no pet from the previously visible group +10
• All pets within the next group are unique +5
• The order of cards in the next group is random within the above rules +5
• Card switching is animated (slide) +5
• During the slide animation, additional arrow clicks are ignored - animations do not stack +5
3.Pagination on Pets (40 points)
• The block contains 48 cards: 6 pages × 8 on desktop, 8 × 6 on tablet, 16 × 3 on mobile +10
• The 48 cards are built from pets.json so that all pets appear an equal number of times +5
• No two adjacent cards (in linear order) show the same pet +5
• Pagination controls present: first, previous, current page indicator, next, last +5
• Disabled controls (e.g. "previous" on page 1) are visually inactive and don't respond to clicks +5
• Page switching is animated +10
4.Popup (15 points)
• Clicking a pet card opens a popup with that pet's details from pets.json +5
• The popup has a darkened backdrop covering the page, and closes when clicking the close button or the backdrop area outside the popup +5
The page behind the popup does not scroll while the popup is open +5
`);