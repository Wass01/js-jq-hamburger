// variabili uno per l'apertura menu e
// l'altro per la chiusura


// // primo metodo
// var open = $(".header-right a");
// var close = $(".hamburger-menu a");
// var hamburger = $(".hamburger-menu");
//
// open.click(function() {
//     hamburger.show();
// });
//
// close.click(function() {
//     hamburger.hide();
// });

var hamburger = $(".hamburger-menu");

// // secondo metodo
// $(".header-right a").click(function() {
//   hamburger.fadeIn();
// });
//
// $(".hamburger-menu a").click(function() {
//   hamburger.fadeOut();
// });

// terzo metodo
$(".header-right > a > i").click(function() {
  hamburger.addClass("active");
});

$(".hamburger-menu > a").click(function() {
  hamburger.removeClass("active");
});
