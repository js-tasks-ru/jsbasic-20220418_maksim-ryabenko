import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListeners();
    this.counter = 0;
  }

  render() {
    this.elem = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/jsbasic-20220418_maksim-ryabenko/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner">
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"">
          <img src="/jsbasic-20220418_maksim-ryabenko/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>`
    );
    
    this.categories.forEach((element) => {
      let elem = createElement(`
        <a href="#" class="ribbon__item" data-id="${element.id}">${element.name}</a>
      `);

      this.sub('inner').append(elem);
      this.update();
    });
  };

  sub(ref) {
    return this.elem.querySelector(`.ribbon__${ref}`);
  }

  addEventListeners() {
    this.elem.onclick = (event) => {
      let allLinks = this.sub('inner').querySelectorAll('.ribbon__item_active');

      if(allLinks.length) {
        allLinks.forEach((link) => {
          link.classList.remove('ribbon__item_active');
        });
      }

      let link = event.target.closest('.ribbon__item');
      
      if(link) {
        event.preventDefault();
        event.target.classList.add('ribbon__item_active');
        let id = event.target.closest('[data-id]').dataset.id;

        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: id, 
          bubbles: true 
        }));
      }

      if (event.target.closest('.ribbon__arrow_right')) {
        this.next();
      }

      if (event.target.closest('.ribbon__arrow_left')) {
        this.prev();
      }
    };

    this.sub('inner').onscroll = (event) => {
      this.update();
    }
  }

  next() {
    this.sub('inner').scrollBy(350, 0);
    this.update();
  };

  prev() {
    this.sub('inner').scrollBy(-350, 0);
    this.update();
  };

  update() {
    let scrollLeft = this.sub('inner').scrollLeft;
    let scrollWidth = this.sub('inner').scrollWidth;
    let clientWidth = this.sub('inner').clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if(scrollLeft == Math.floor(0)) {
      this.sub('arrow_left').classList.remove('ribbon__arrow_visible');
    } else if (scrollLeft !== Math.floor(0)) {
      this.sub('arrow_left').classList.add('ribbon__arrow_visible');
    }

    if (scrollLeft !== Math.floor(0) && scrollRight == Math.floor(0)) {
      this.sub('arrow_right').classList.remove('ribbon__arrow_visible');
    } else if (scrollRight !== Math.floor(0)) {
      this.sub('arrow_right').classList.add('ribbon__arrow_visible');
    }
  }
}
