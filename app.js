AOS.init();

$(".header-right img").on("click", function () {
  $(".overlay").toggleClass("clicked");
});

$(document).ready(function ($) {
  if ($(window).width() > 1000) {
    setTimeout(function () {
      document.getElementById("website").innerHTML = "portfolio";
    }, 7000);
    setTimeout(function () {
      document.getElementById("website").innerHTML = "website";
    }, 11000);
  } else {
    document.getElementById("website").innerHTML = "website";
  }
});
