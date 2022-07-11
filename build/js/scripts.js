// Custom Scripts
// Custom scripts
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 28,
});

$('#modal, #bg_layer').hide();
$( "#btn" ).click(function() {
  $( ".modals" ).toggleClass( "modals-aktiv" ),
  $('#modal, #bg_layer').show();
});
$( "#exit-btn" ).click(function() {
  $( ".modals" ).toggleClass( "modals-aktiv" ),
  $('#modal, #bg_layer').hide();
});;
