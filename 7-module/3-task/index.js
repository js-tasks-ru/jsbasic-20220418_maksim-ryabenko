import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.addEventListeners();
    this.setValue(value);
  }

  render() {
    this.elem = createElement(`
      <!--Корневой элемент слайдера-->
      <div class="slider">
    
        <div class="slider__thumb" style="left: 50%;">
          <span class="slider__value"></span>
        </div>
    
        <div class="slider__progress" style="width: 50%;"></div>
    
        <div class="slider__steps">
          ${'<span></span>'.repeat(this.steps)}
        </div>
      </div>
    `);
  }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

  addEventListeners() {
    this.elem.onclick = (event) => {
      let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

      this.setValue(Math.round(this.segments * newLeft));

      this.elem.dispatchEvent(
        new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        })
      );
    };
  }

  setValue(value) {
    this.value = value;

    let valuePercents = (value / this.segments) * 100;

    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  } 
}
