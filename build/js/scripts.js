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
});

var swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 28,
});


;
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const contentString = '<div class="map-addressinfo"><div class="map-addressinfo__firstaddress"><div class="map-addressinfo__firstaddress-wrap"><img src="img/marker.png" alt="" class="map-marker" /><div class="map-addressinfo__firstaddress-text"><strong class="map-addressinfo__firstaddress-text__title">Адрес офиса</strong><br />г. Уфа, Проспект октября, 46 <br /><p class="map-addressinfo__firstaddress-text2"><strong class="map-addressinfo__firstaddress-text__title">Адрес офиса</strong><br />г. Уфа, Проспект октября, 46</p></div></div></div><div class="map-addressinfo__secondaddress map-addressinfo__firstaddress"><div class="map-addressinfo__secondaddress-wrap map-addressinfo__firstaddress-wrap"><img src="img/phone.png" alt="" class="map-phone map-marker" /><div class="map-addressinfo__secondaddress-text map-addressinfo__firstaddress-text"><strong class="map-addressinfo__secondaddress__title map-addressinfo__firstaddress-text__title">Тел. отдела продаж:</strong><br />8 (347) 271-54-28 <br />8 (937) 363-30-00</div></div><a href="#"><button class="map-addressinfo__secondaddress-btn">Заказать звонок</button></a></div><div class="map-addressinfo__thirdaddress map-addressinfo__firstaddress"><div class="map-addressinfo__thirdaddress-wrap map-addressinfo__firstaddress-wrap"><img src="img/mail.png" alt="" class="map-marker" /><div class="map-addressinfo__thirdaddress-text map-addressinfo__firstaddress-text"><strong class="map-addressinfo__thirdaddress__title map-addressinfo__firstaddress-text__title">Е-mail</strong><br /><p class="map-addressinfo__thirdaddress__subtitle">urals.karton@gmail.com</p></div></div></div></div>';
  const uluru = { lat: 54.752638, lng: 56.002105 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    center: uluru,
    zoom: 18,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  const image = "img/circle.png";
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image,
  });
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: true,
    });
});
}

window.initMap = initMap;
;