import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/jsbasic-20220418_maksim-ryabenko/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title">
            </h3>
          </div>

          <div class="modal__body">
          </div>
        </div>
      </div>
    `);
  }

  sub(ref) {
    return this.elem.querySelector(ref);
  }

  setTitle(title) {
    let modalTitle = this.sub('.modal__title'); 
    modalTitle.innerHTML = title;
  }

  setBody(body) {
    let modalBody = this.sub('.modal__body'); 
    modalBody.innerHTML = '';
    modalBody.append(body);
  }

  open() {
    let body = document.querySelector('body');
    body.append(this.elem);
    body.classList.add('is-modal-open');
  }

  addEventListeners() {
    this.elem.onclick = (event) => {
      if(event.target.closest('.modal__close'))  {
        this.close();
      }
    };

    document.addEventListener('keydown', (event) => {
      if (event.code == 'Escape') {
        this.close();
      }
    });
  }

  close() {
    let body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    this.remove();
  }

  remove() {
    this.elem.remove();
  }
}
