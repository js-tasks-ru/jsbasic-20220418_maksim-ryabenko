import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel();
    this.counter = 0;
    this.transforWidth = 0;
    this.slideWidth = 0;
    this.carouselList = null;
    this.rightBtn = null;
    this.leftBtn = null; 
  }

  createCarousel() {
    const carousel = createElement('<div class="carousel">');

    this.rightBtn = createElement(`
    <div class="carousel__arrow carousel__arrow_right">
      <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
    </div>`);
    this.leftBtn = createElement(`
    <div class="carousel__arrow carousel__arrow_left">
      <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`);

    const carouselList = createElement('<div class="carousel__inner">'); 
    const slides = this.createSlide();

    slides.forEach(slide => {
      carouselList.appendChild(slide);

      setTimeout(() => {
        this.slideWidth = slide.offsetWidth;
      }, 0);
    });


    this.rightBtn.addEventListener('click', (event) => {
      this.transforWidth -= this.slideWidth;
      this.changeSlide('next', ++this.counter, this.transforWidth);
    });

    this.leftBtn.addEventListener('click', (event) => {
      this.transforWidth += this.slideWidth;
      this.changeSlide('prev', --this.counter, this.transforWidth);
    });

    carousel.appendChild(this.rightBtn);
    carousel.appendChild(this.leftBtn);
    carousel.appendChild(carouselList);

    return carousel;
  }

  createSlide() {
    return this.slides.map(element => {
      return createElement(`
      <div class="carousel__slide" data-id="${element.id}">
        <img src="../../assets/images/carousel/${element.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${element.price.toFixed(2)}</span>
          <div class="carousel__title">${element.name}</div>
          <button type="button" class="carousel__button">
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`);
    });
  }

  changeSlide(arg, counter, transformWidth, innerCarousel) {

    let carouselList = document.querySelector('.carousel__inner');

    if (arg === 'prev') {
      carouselList.style.transform = 'translateX(' + `${transformWidth}` + 'px)';
    }

    if (arg === 'next') {
      carouselList.style.transform = 'translateX(' + `${transformWidth}` + 'px)';
    }

    console.log('counter', counter);
    console.log('this.leftBtn', this.leftBtn);


    // counter === 0 ? this.leftBtn.style.display = 'none' : this.leftBtn.style.display = '';
    // counter === 3 ? rightBtn.style.display = 'none' : rightBtn.style.display = '';

  }

}
