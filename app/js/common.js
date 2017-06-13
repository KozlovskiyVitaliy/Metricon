new WOW().init();

$(".wow").each(function() {
  var wowHeight = $(this).height();
  $(this).attr("data-wow-offset", wowHeight);
});