$(document).ready(function(){

  $(".menu").click(function() {
    $(".screen_help").css("display", "block")
	});

  $(".close").click(function() {
    $(".screen_help").css("display", "none")
  });

  $(".close").click(function() {
    $(".screen_help").css("display", "none")
  });


  $(".more-inf3").click(function() {
    $(".look1").css("display", "none")
    $(".look2").css("display", "none")
    $(".look3").css("display", "block")
  });

  $(".more-inf2").click(function() {
    $(".look1").css("display", "none")
    $(".look3").css("display", "none")
    $(".look2").css("display", "block")
  });

  $(".more-inf1").click(function() {
    $(".look2").css("display", "none")
    $(".look3").css("display", "none")
    $(".look1").css("display", "block")
  });



  // афиша




  $("body").mousemove(function(event) {
      let eye = $(".eye");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });

  function clock() {
    const hoursArrow = document.querySelector('.hours')
    const minutesArrow = document.querySelector('.minutes')
    const secondsArrow = document.querySelector('.seconds')
    let deg = 6

    setInterval(() => {
      const day = new Date()

      const hours = day.getHours() * 30
      const minutes = day.getMinutes() * deg
      const seconds = day.getSeconds() * deg

      hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
      minutesArrow.style.transform = `rotateZ(${minutes}deg)`
      secondsArrow.style.transform = `rotateZ(${seconds}deg)`

    }, 0)
  }

  clock()

  document.querySelector(".afisha")[0].onclick = function(){window.location.href='afisha.html'}

// это свайпер для страниц книги
  new Swiper('.image_slider', {

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});
