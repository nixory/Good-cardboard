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
$("#btn").click(function() {
	$(".modals").toggleClass("modals-aktiv"),
		$('#modal, #bg_layer').show();
});
$("#exit-btn").click(function() {
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
$('.tablets-menu').hide();
$("#menu-button").click(function() {
	$('.tablets-menu').show();
});
$("#exit-button, #about-btn, #advantage-btn, #factory-btn, #info-btn, #productss-btn, #klients-btn, #feedback-btn").click(function() {
	$('.tablets-menu').hide();
});;

// function initMap() {
//   const contentString = '<div class="map-addressinfo"><div class="map-addressinfo__firstaddress"><div class="map-addressinfo__firstaddress-wrap"><img src="img/marker.png" alt="" class="map-marker" /><div class="map-addressinfo__firstaddress-text"><strong class="map-addressinfo__firstaddress-text__title">Адрес офиса</strong><br />г. Уфа, Проспект октября, 46 <br /><p class="map-addressinfo__firstaddress-text2"><strong class="map-addressinfo__firstaddress-text__title">Адрес офиса</strong><br />г. Уфа, Проспект октября, 46</p></div></div></div><div class="map-addressinfo__secondaddress map-addressinfo__firstaddress"><div class="map-addressinfo__secondaddress-wrap map-addressinfo__firstaddress-wrap"><img src="img/phone.png" alt="" class="map-phone map-marker" /><div class="map-addressinfo__secondaddress-text map-addressinfo__firstaddress-text"><strong class="map-addressinfo__secondaddress__title map-addressinfo__firstaddress-text__title">Тел. отдела продаж:</strong><br />8 (347) 271-54-28 <br />8 (937) 363-30-00</div></div><a href="#"><button class="map-addressinfo__secondaddress-btn">Заказать звонок</button></a></div><div class="map-addressinfo__thirdaddress map-addressinfo__firstaddress"><div class="map-addressinfo__thirdaddress-wrap map-addressinfo__firstaddress-wrap"><img src="img/mail.png" alt="" class="map-marker" /><div class="map-addressinfo__thirdaddress-text map-addressinfo__firstaddress-text"><strong class="map-addressinfo__thirdaddress__title map-addressinfo__firstaddress-text__title">Е-mail</strong><br /><p class="map-addressinfo__thirdaddress__subtitle">urals.karton@gmail.com</p></div></div></div></div>';
//   const uluru = { lat: 54.752638, lng: 56.002105 };
  
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: uluru,
//     zoom: 18,
//     scrollwheel: false,
//     disableDoubleClickZoom: true,
//   });
//   const image = "img/circle.png";
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//     icon: image,
//   });
//   const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//   });
//   const gg = infowindow.open({
//     anchor: marker,
//     map,
//     shouldFocus: true,
//   });
//   marker.addListener("click", () => {
//     infowindow.open({
//       anchor: marker,
//       map,
//       shouldFocus: true,
//     });
    
// });
//   var map2 = new google.maps.Map(document.getElementById('map2'), mapOptions);
// }

// window.initMap = initMap;


;
// Map options

function initMap() {
  var latlng = { lat: 54.752638, lng: 56.002105 };
  var mapOptions = {
    center: latlng,
    scrollwheel: false,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var infowindow = new google.maps.InfoWindow({
    content:
      '<div class="map-addressinfo"><div class="map-addressinfo__firstaddress"><div class="map-addressinfo__firstaddress-wrap"><img src="img/marker.png" alt="" class="map-marker" /><div class="map-addressinfo__firstaddress-text"><strong class="map-addressinfo__firstaddress-text__title">Адрес офиса</strong><br />г. Уфа, Проспект октября, 46 <br /><p class="map-addressinfo__firstaddress-text2"><strong class="map-addressinfo__firstaddress-text__title">Адрес офиса</strong><br />г. Уфа, Проспект октября, 46</p></div></div></div><div class="map-addressinfo__secondaddress map-addressinfo__firstaddress"><div class="map-addressinfo__secondaddress-wrap map-addressinfo__firstaddress-wrap"><img src="img/phone.png" alt="" class="map-phone map-marker" /><div class="map-addressinfo__secondaddress-text map-addressinfo__firstaddress-text"><strong class="map-addressinfo__secondaddress__title map-addressinfo__firstaddress-text__title">Тел. отдела продаж:</strong><br />8 (347) 271-54-28 <br />8 (937) 363-30-00</div></div><a href="#"><button class="map-addressinfo__secondaddress-btn">Заказать звонок</button></a></div><div class="map-addressinfo__thirdaddress map-addressinfo__firstaddress"><div class="map-addressinfo__thirdaddress-wrap map-addressinfo__firstaddress-wrap"><img src="img/mail.png" alt="" class="map-marker" /><div class="map-addressinfo__thirdaddress-text map-addressinfo__firstaddress-text"><strong class="map-addressinfo__thirdaddress__title map-addressinfo__firstaddress-text__title">Е-mail</strong><br /><p class="map-addressinfo__thirdaddress__subtitle">urals.karton@gmail.com</p></div></div></div></div>',
  });
  var infowindow2 = new google.maps.InfoWindow({
    content: "govno",
  });

  var image = "img/circle.png";

  // Create map
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions);

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    icon: image,
  });
  var marker2 = new google.maps.Marker({
    map: map2,
    position: latlng,
    icon: image,
  });
  var gg = infowindow.open({
    anchor: marker,
    map,
    shouldFocus: true,
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: true,
    });

    var ww = infowindow2.open({
      anchor: marker2,
      map2,
      shouldFocus: true,
    });
    marker2.addListener("click", () => {
      infowindow2.open({
        anchor: marker2,
        map2,
        shouldFocus: false,
      });
    });
  });
}

initMap();
;