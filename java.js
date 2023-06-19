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

// появление формы

$(".btnn").click(function() {
  $(".background").css("display", "block")
  $(".question").css("display", "block")
});

$(".cross2").click(function() {
  $(".background").css("display", "none")
  $(".question").css("display", "none")
});

  $(".cross").click(function() {
    $(".background").css("display", "none")
    $(".forma").css("display", "none")
  });

  $(".button").click(function() {
    $(".forma").css("display", "none")
    $(".forma_after").css("display", "block")
  });

  $(".forma_after").click(function() {
    $(".forma_after").css("display", "none")
    $(".background").css("display", "none")
  });

  // тут радио-кнопки с коврами


  $(".btn_merch").click(function() {
    $(".question").css("display", "block")
    $(".background").css("display", "block")
  });

  $(".cross2").click(function() {
    $(".background").css("display", "none")
    $(".question").css("display", "none")
  });

  $(".next1").click(function() {
    $(".question").css("display", "none")
    $(".background").css("display", "block")
    $(".forma").css("display", "block")
  });

  // выбрать из сказки
  $(".btn_order").click(function() {
    $(".question").css("display", "block")
    $(".background").css("display", "block")
  });

  $(".cross2").click(function() {
    $(".background").css("display", "none")
    $(".question").css("display", "none")
  });

  $(".next1").click(function() {
    $(".question").css("display", "none")
    $(".background").css("display", "block")
    $(".forma").css("display", "block")
  });

  // закончились формы и чек-листы ура

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



  // книга - слайдер в завис от главы

  $(".glava1").click(function() {
    $(".wrapper1").css("display", "block")
    $(".wrapper2").css("display", "none")
    $(".wrapper4").css("display", "none")
    $(".wrapper5").css("display", "none")
    $(".wrapper7").css("display", "none")
  });

  $(".glava2").click(function() {
    $(".wrapper2").css("display", "block")
    $(".wrapper1").css("display", "none")
    $(".wrapper4").css("display", "none")
    $(".wrapper5").css("display", "none")
    $(".wrapper7").css("display", "none")
  });

  $(".glava4").click(function() {
    $(".wrapper4").css("display", "block")
    $(".wrapper1").css("display", "none")
    $(".wrapper2").css("display", "none")
    $(".wrapper5").css("display", "none")
    $(".wrapper7").css("display", "none")
  });

  $(".glava5").click(function() {
    $(".wrapper5").css("display", "block")
    $(".wrapper1").css("display", "none")
    $(".wrapper2").css("display", "none")
    $(".wrapper4").css("display", "none")
    $(".wrapper7").css("display", "none")
  });

  $(".glava7").click(function() {
    $(".wrapper7").css("display", "block")
    $(".wrapper1").css("display", "none")
    $(".wrapper2").css("display", "none")
    $(".wrapper4").css("display", "none")
    $(".wrapper5").css("display", "none")
  });




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

});
