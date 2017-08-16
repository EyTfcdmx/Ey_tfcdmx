// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2vatlTtHmK3APhQ3NcnVeRhqvWYMubNg",
    authDomain: "regards-fd8b9.firebaseapp.com",
    databaseURL: "https://regards-fd8b9.firebaseio.com",
    projectId: "regards-fd8b9",
    storageBucket: "regards-fd8b9.appspot.com",
    messagingSenderId: "254406909723"
  };
  firebase.initializeApp(config);
var regard = [];
function guardarDatos() {

   firebase.database().ref("/").set({
    recompensas:{  
       "0":{
        'id':0,
     	'name': 'Bolígrafo',
     	'reqPtos': 25,
      'info': "Sujeto a disponibilidad",
      'url':"../img/boligrafo.png"
     },
      "1":{
        'id':1,
     	'name': 'Cilindro',
     	'reqPtos': 30,
      'info': "Sujeto a disponibilidad",
      'url':"../img/cilindro.png"
     },
       '2': {
        'id':2,
     	'name': 'Pin metálico',
     	'reqPtos': 50,
      'info': "Sujeto a disponibilidad",
      'url':"../img/pin.jpg"
     },
       '3':{
        'id': 3,
        'name': 'Taza Térmica',
        'reqPtos':50,
        'info': "Sujeto a disponibilidad",
        'url':"../img/taza.png"
     },
       '4':{
        'id':4,
     	'name':'Carpeta de piel',
     	'reqPtos': 125,
      'info': "Sujeto a disponibilidad",
      'url':"../img/carpeta.png"
     },
     '5':{
      'id': 5,
     	'name': 'Chamarra de piel',
     	'reqPtos': 150,
       'info':'Hombre o Mujer',
       'info': "Sujeto a disponibilidad",
      'url':"../img/chamarra.png"
     },
	    '6':{
        'id':6,
	  	'name':'Vale válido hasta $100*',
	  	'reqPtos':75,
      'info': "Sujeto a disponibilidad",
      'url':"../img/gastos.png"
	  },
	   '7':{
      'id': 7,
	  	'name': 'Vale válido hasta $250*',
	  	'reqPtos': 150,
      'info': "Sujeto a disponibilidad",
      'url':"../img/gastos.png"
	  },
		 '8':{
      'id': 8,
			'name': 'Cortesía cine',
			'reqPtos': 100,
			'info': ' Pase doble',
      'url':"../img/cine.png"
		},
		  '9':{
        'id':9,
			'name':'Cortesía Gotcha',
			'reqPtos': 175,
			'info':'Aplicable a 6 personas por cortesía',
      'url':"../img/gotcha.png"
    },
		  '10':{
        'id': 10,
			'name':'Vacaciones adicionales',
			'reqPtos': 200,
			'info':'Válido por un dia extra de vacaciones**',
      'url': "../img/vacaciones.png"
    },
		  '11':{
        'id': 11,
			'name': 'Cortesía comida',
			'reqPtos': 225,
			'info':'Válido por una comida para dos personas con un monto máximo de $350',
      'url':"../img/comida2.png"
		}
    }
    });
    
  };

   guardarDatos();
var cargarPagina = function(){
   
  $(document).on("click", ".btn-floating", mostrarModal);
} 


 var mostrarTarjetas= function(recompensas){
      var $contenedor =$("#contenedor");
      recompensas.forEach(function(recompensa){
        var nombre =  recompensa.name;
        var puntos= recompensa.reqPtos;
        var info = recompensa.info;
        var source = recompensa.url;
        var id = recompensa.id;
        var $div = $("<div/>");
        var $divI = $("<div/>");
        var $divCc = $("<div/>");
        var $span =$("<span/>");
        var $i = $("<i/>");
        var $divCr = $("<div/>");
        var $spanR = $("<span/>");
        var $iR = $("<i/>");
        var $img = $("<img/>");
        var $pNom= $("<p/>");
        var $pPts =$("<p/>");
        var $pInf = $("<p/>");
       
        
        $div.addClass("card col xl3 l3 m3 s3");
        $divI.addClass("card-image waves-effect waves-block waves-light")
        $divCc.addClass("card-content");
        $img.attr("src", source);
        $img.addClass("activator img");
        $span.addClass("card-title activator grey-text text-darken-4");
        $span.text("Nombre:"+ " "+ nombre);
        $i.addClass("material-icons right");
        $i.text("more_vert");
        $divCr.addClass("card-reveal");
        $spanR.addClass("card-title grey-text text-darken-4");
        $spanR.text("Detalles Recompensa");
        $iR.addClass("material-icons right");
        $iR.text("close");
        $pNom.text("Nombre:"+ " " + nombre);
        $pPts.text("Valor en Puntos:"+ " "+puntos);
        $pInf.text("Info:" + " " +info)
        $span.append($i);
        $spanR.append($iR);
        $divI.append($img);
        $divCc.append($span);
        $divCr.append($spanR,$pNom, $pPts, $pInf);
        $div.append($divI, $divCc, $divCr)

        $contenedor.append($div);
       
     
    });
    
       
};




   firebase.database().ref('/recompensas').on('value', function (snapshot) {
    var recompensas = snapshot.val();
        mostrarTarjetas(recompensas);
  });
   $(document).ready(cargarPagina);

  