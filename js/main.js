; (function () {
	"use strict";

	let bestSlider = $('.ba-header');


	bestSlider.slick({
		slide: '.slider',
		arrows: false,
		dots: true,
		speed: 400,
		infinite: true,
		fade: true,
		cssEase: 'linear'
	});



	// $('.ba-card-slide').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// 	dots: true,
	// 	// prevArrow: true
	// });


	let newsSlider = $('.ba-card-slide');


	newsSlider.slick({

		slide: '.ba-box-card',
		nextArrow: '.slick-next',
		prevArrow: '.slick-prev',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,

	});


	function initBaMap() {
		// The location of mapCenter
		let cities = {
			poltava: {
				coords: {lat: 49.531508, lng: 34.472870},
				address: 'Котляревского,2'
			}
		}
		let mapCenter = cities.poltava.coords;
		// The map, centered at mapCenter
		let mapEl = document.getElementById('map');

		let mapOptions = 	{
			zoom: 15,
			center: mapCenter,
			disableDefaultUI: true, // отключает все контролы 
			// draggable: false что бы не двигалась 
			styles: [
				{
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#bdbdbd"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#ffffff"
					 }
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#dadada"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#c9c9c9"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				}
			 ]
		};
		
		let $baMap = new google.maps.Map(mapEl, mapOptions);// create map
		
		for(const city in cities){

			// The marker, positioned at mapCenter
			let marker = new google.maps.Marker(
				{ 
					position: cities[city].coords, 
					map: $baMap,
					icon: "img/marker.png"
				}
				);
		}
		$baMap.setCenter(newCoords);
	}
	window.addEventListener('load', initBaMap);
})();

