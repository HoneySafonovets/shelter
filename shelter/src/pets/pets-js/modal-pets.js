export default function modalWindowRender(data, cardAnimalBtn) {
  data.forEach(e => {
      let modal = `
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
                  <li class="modal__info-item"><span>Inoculations:</span> ${e.inoculations.map(el => ` ${el}`)}</li>
                  <li class="modal__info-item"><span>Diseases:</span> ${e.diseases.map(el => ` ${el}`)}</li>
                  <li class="modal__info-item"><span>Parasites:</span> ${e.parasites.map(el => ` ${el}`)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
      document.body.insertAdjacentHTML('beforeend', modal)
  });

  cardAnimalBtn = document.querySelectorAll('.friends__card');

  cardAnimalBtn.forEach(e => {
    e.addEventListener('click', () => {
      let cardId = e.getAttribute("data-name");
      let card = document.querySelector(cardId);

      card.classList.add('modal-active');

      // Examination for Document.BODY
      document.body.classList.add('no-scroll');

      const closeCardBtn = document.querySelectorAll('.modal__close-item');

      closeCardBtn.forEach(e => {
        e.addEventListener('click', () => {
          card.classList.remove('modal-active')
          document.body.classList.remove('no-scroll');
        })
      })
      card.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.modal__content')) {
          card.classList.remove('modal-active')
          document.body.classList.remove('no-scroll');
        }
      })
    })
  });
}