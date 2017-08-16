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

 var contador = 1;


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
 	console.log("HOLA MAQUI", this)
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

 function agregarEmpleadostop() {
 	var empleados = [
 		{
 			nombre: "Alma",
 			apellido: "Perez Sanches",
 			id_empleado: "0001245"
		},
 		{
 			nombre: "Juan",
 			apellido: "Torres Galvan",
 			id_empleado: "0001246"
		},
 		{
 			nombre: "Jesus",
 			apellido: "Lopez Mora",
 			id_empleado: "0001247"
		},
 		{
 			nombre: "Georgina",
 			apellido: "Perez Perez",
 			id_empleado: "0001248"
		},
 		{
 			nombre: "Angelica",
 			apellido: "Muñoz Ramos",
 			id_empleado: "0001249"
		},
 		{
 			nombre: "Juana",
 			apellido: "Ramos Ramirez",
 			id_empleado: "0001250"
		},
 		{
 			nombre: "Alma",
 			apellido: "Sanchez Ledesma",
 			id_empleado: "0001251"
		},


	]


 	empleados.forEach(function (empleado) {
 		renderEmpleados(empleado, contador)
 		contador++;

 	})

 	renderEmpleados(empleado = {
 		nombre: "Juan",
 		apellido: "Torres",
 		id_empleado: "0001895"
 	}, 115)
 }


 fnction renderEmpleados(empleado, contador) {
 	var $contenedor = $("#bodyTabla")
 	var $tr = $("<tr/>")
 	var $td = $("<td/>")
 	var $td2 = $("<td/>")
 	var $td3 = $("<td/>")


 	var nombre = empleado.nombre;
 	var apellido = empleado.apellido;
 	var numerodeEmpleado = empleado.id_empleado;

 	$td.html(contador)
 	$td2.html(nombre + " " + apellido)
 	$td3.html(numerodeEmpleado)

 	$tr.append($td)
 	$tr.append($td2)
 	$tr.append($td3)
 	$contenedor.append($tr)
 }

 agregarEmpleadostop()
