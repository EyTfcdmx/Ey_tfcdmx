 function initMap(currentPosition) {

 	var lat = currentPosition.coords.latitude;
 	var log = currentPosition.coords.longitude;

 	var map = new google.maps.Map(document.getElementById('map'), {
 		zoom: 15,
 		center: {
 			lat: lat,
 			lng: log
 		},
 	});

 	// Create an array of alphabetical characters used to label the markers.
 	var labels = 's';

 	// Add some markers to the map.
 	// Note: The code uses the JavaScript Array.prototype.map() method to
 	// create an array of markers based on a given "locations" array.
 	// The map() method here has nothing to do with the Google Maps API.
 	var markers = locations.map(function (location, i) {
 		return new google.maps.Marker({
 			position: location,
 			label: labels[i % labels.length]
 		});
 	});

 	// Add a marker clusterer to manage the markers.
 	var markerCluster = new MarkerClusterer(map, markers, {
 		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
 	});
 }

 var locations = [
 	{
 		lat: 19.417767899999998,
 		lng: -99.16469029999999
    	},
 	{
 		lat: 19.417767899999918,
 		lng: -99.16469029999999
    	},
 	{
 		lat: 19.417767899999598,
 		lng: -99.16469029999999
    	},
 	{
 		lat: 19.417767899999798,
 		lng: -99.16469029999999
    	},
 	{
 		lat: 19.417767899999999,
 		lng: -99.16469029999999
    	},
 	{
 		lat: 19.414471,
 		lng: -99.158376
    	},
 	{
 		lat: 19.414473,
 		lng: -99.158376
    	},
 	{
 		lat: 19.414474,
 		lng: -99.158376
    	}


      ]



 function obtainGeolocation() {
 	//obtener la posición actual y llamar a la función  "localitation" cuando tiene éxito
 	window.navigator.geolocation.getCurrentPosition(localitation);
 }

 function localitation(geo) {

 	// En consola nos devuelve el Geoposition object con los datos nuestros
 	initMap(geo)
 }
 //llamando la funcion inicial para ver trabajar la API
 obtainGeolocation();

 var barras = function () {
 	jQuery('.skillbar').each(function () {
 		jQuery(this).find('.skillbar-bar').animate({
 			width: jQuery(this).attr('data-percent')
 		}, 600);
 	});
 }

 barras()
 var cambioDeGraficasRecompensas = function (e) {
 	//	document.getElementById("CenaX2")
 	var op = this.value


 	switch (op) {
 		case 1:
 			agregarPorcentajeCine("70%")
			agregarPorcentajeCena("10%")
 			break;
 		case 2:
 			agregarPorcentajeCine("60%")
			agregarPorcentajeCena("80%")
 			break;
 		case 3:
 			agregarPorcentajeCine("20%")
			agregarPorcentajeCena("25%")
 			break;
 		case 4:
 			agregarPorcentajeCine("40%")
			agregarPorcentajeCena("60%")
 			break;
 		default:

 	}
 }

 var celdas = document.getElementsByClassName("cambioSkill");


 function agregarEventosACeldas() {
  [].forEach.call(celdas, function (celda) {
 		
 		celda.addEventListener("click", cambioDeGraficasRecompensas)
 	})
 }

 agregarEventosACeldas()

 function agregarPorcentajeCine(porcentaje) {
 	var barrar = document.getElementById('CenaX2')

 	barrar.removeAttribute("data-percent")
 	barrar.setAttribute("data-percent", porcentaje)
 	barras()
 	$("#porcentajeCine").html(porcentaje)
 }

 function agregarPorcentajeCena(porcentaje) {
 	var barrar = document.getElementById('CenaX3')

 	barrar.removeAttribute("data-percent")
 	barrar.setAttribute("data-percent", porcentaje)
 	barras()
 	$("#porcentajeCena").html(porcentaje)
 }