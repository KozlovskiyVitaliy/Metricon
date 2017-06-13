$(document).ready(function(){

  new WOW().init();

  $(".wow").each(function() {
    var wowHeight = $(this).height();
    $(this).attr("data-wow-offset", wowHeight);
  });

  $('.first').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,         
  });
      
});
