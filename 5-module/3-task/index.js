function initCarousel() {
  let counter = 0;
  let leftBtn = document.querySelector('.carousel__arrow_left');
  let rightBtn = document.querySelector('.carousel__arrow_right');
  let carouselList = document.querySelector('.carousel__inner');
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let transforWidth = 0;

  rightBtn.addEventListener('click', () => {
    transforWidth -= slideWidth
    changeSlide('next', ++counter, transforWidth)
  })

  leftBtn.addEventListener('click', () => {
    transforWidth += slideWidth
    changeSlide('prev', --counter, transforWidth);
  })

  leftBtn.style.display = 'none';

  function changeSlide(arg, counter, transformWidth) {

    if(arg === 'prev') {
      carouselList.style.transform = 'translateX('+ `${transformWidth}` + 'px)';
    }

    if(arg === 'next') {
      carouselList.style.transform = 'translateX('+ `${transformWidth}` + 'px)';
    }

    counter === 0 ? leftBtn.style.display = 'none' : leftBtn.style.display = '';
    counter === 3 ? rightBtn.style.display = 'none' : rightBtn.style.display = '';
  }

}
