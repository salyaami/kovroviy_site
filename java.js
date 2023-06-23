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

// close формы

$(function(){
$('.cross').click(function(){
  $('.forma').hide(200),
  $('.question').hide(200),
  $('.background').hide(250);
});
});

$(function(){
$('.cross2').click(function(){
$('.forma').hide(200),
$('.question').hide(200),
$('.background').hide(250);
});
});

  // тут радио-кнопки с коврами появляются по всем кнопкам


  $(function(){
    $('.btn_merch').click(function(){
      $('.question').show(250),
      $('.background').show(250);
  });
  });

  $(function(){
    $('.btnn').click(function(){
      $('.question').show(250),
      $('.background').show(250);
  });
  });

  $(function(){
    $('.btn_order').click(function(){
      $('.question').show(250),
      $('.background').show(250);
  });
  });

  // продолжаем закрываем радио кнопаки

  $(function(){
  $('.next1').click(function(){
    $('.question').hide(200),
    $('.forma').show(250);
});
});

// закрываем все и тележка

  $(function(){
    $('.complete').click(function(){
      $('.forma').hide(200),
      $('.forma_after').show(250),
      $('.forma_after').delay(2400).hide(200),
      $('.background').delay(2700).hide(200);
    });
  });

  // закончились формы и чек-листы ура

  $(".more-inf3").click(function() {
    $(".look1").hide(200),
    $(".look2").hide(200),
    $(".look3").show(250);
  });

  $(".more-inf2").click(function() {
    $(".look1").hide(200),
    $(".look3").hide(200),
    $(".look2").show(250);
  });

  $(".more-inf1").click(function() {
    $(".look2").hide(200),
    $(".look3").hide(200),
    $(".look1").show(250);
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

  // книга - cмена шапки по клику

  $(".glava1").click(function() {
    $(".side_black").css("display", "block")
    $(".side_black2").css("display", "none")
    $(".side_black4").css("display", "none")
    $(".side_black5").css("display", "none")
    $(".side_black7").css("display", "none")
  });

  $(".buy").click(function() {
    $(".question").css("display", "block")
    $(".background").css("display", "block")
  });

  $(".glava2").click(function() {
    $(".side_black2").css("display", "block")
    $(".side_black").css("display", "none")
    $(".side_black4").css("display", "none")
    $(".side_black5").css("display", "none")
    $(".side_black7").css("display", "none")
  });

  $(".glava4").click(function() {
    $(".side_black4").css("display", "block")
    $(".side_black").css("display", "none")
    $(".side_black2").css("display", "none")
    $(".side_black5").css("display", "none")
    $(".side_black7").css("display", "none")
  });

  $(".glava5").click(function() {
    $(".side_black5").css("display", "block")
    $(".side_black").css("display", "none")
    $(".side_black2").css("display", "none")
    $(".side_black4").css("display", "none")
    $(".side_black7").css("display", "none")
  });

  $(".glava7").click(function() {
    $(".side_black7").css("display", "block")
    $(".side_black").css("display", "none")
    $(".side_black2").css("display", "none")
    $(".side_black5").css("display", "none")
    $(".side_black4").css("display", "none")
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


  // document.querySelector(".afisha")[0].onclick = function(){window.location.href='afisha.html'}

// это свайпер для страниц книги

});
