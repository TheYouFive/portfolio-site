$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= $(".skills-box").offset().top - 250) {
      $(".html-bar").width("50%");
    }
    if ($(this).scrollTop() >= $(".skills-box").offset().top - 150) {
      $(".css-bar").width("50%");
    }
    if ($(this).scrollTop() >= $(".skills-box").offset().top - 80) {
      $(".js-bar").width("20%");
    }
  });
});
