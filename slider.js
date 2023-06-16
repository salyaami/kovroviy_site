// const images = document.querySelectorAll('.slider .slider-line img');
// const sliderLine = document.querySelector('.slider-line');
// let count = 0;
// let width;
//
// function init() {
//   console.log('resize');
//   width = document.querySelector('.slider').offsetWidth;
//   sliderLine.style.width = width*images.length + 'px';
//   images.forEach(item => {
//     item.style.width = width + 'px';
//     item.style.height = 'auto';
//   });
//
// }
// window.addEventListener('resize', init);
// init();
//
// document.querySelector('.swiper-button-next').addEventListener('click', function () {
//   count ++;
//   if (count >= images.length) {
//     count = 0;
//   }
//   rollSlider();
// });
//
// document.querySelector('.swiper-button-prev').addEventListener('click', function () {
//   count--;
//   if (count < 0 ) {
//     count = images.length - 1;
//   }
//   rollSlider();
// });
//
// function rollSlider() {
//   sliderLine.style.transform = 'translate(-' + count * width + 'px)';
// }

new Swiper('.image-slider', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});
