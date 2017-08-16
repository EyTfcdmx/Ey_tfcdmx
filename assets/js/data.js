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
      'url':"img/recompensas/boligrafo.jpg"
     },
      "1":{
        'id':1,
     	'name': 'Cilindro',
     	'reqPtos': 30,
      'url':"img/recompensas/cilindro.jpg"
     },
       '2': {
        'id':2,
     	'name': 'Pin metálico',
     	'reqPtos': 50,
      'url':"img/recompensas/pin.jpg"
     },
       '3':{
        'id': 3,
        'name': 'Taza Térmica',
        'reqPtos':50,
        'url':"img/recompensas/taza.jpg"
     },
       '4':{
        'id':4,
     	'name':'Carpeta de piel',
     	'reqPtos': 125,
      'url':"img/recompensas/carpeta.jpg"
     },
     '5':{
      'id': 5,
     	'name': 'Chamarra de piel',
     	'reqPtos': 150,
       'info':'Hombre o Mujer',
      'url':"img/recompensas/chamarra.jpg"
     },
	    '6':{
        'id':6,
	  	'name':'Vale gastos reembolsables válido hasta $100*',
	  	'reqPtos':75,
      'url':"img/recompensas/100pesos.jpg"
	  },
	   '7':{
      'id': 7,
	  	'name': 'Vale gastos reembolsables válido hasta $250*',
	  	'reqPtos': 150,
      'url':"img/recompensas/250pesos.jpg"
	  },
		 '8':{
      'id': 8,
			'name': 'Cortesía cine',
			'reqPtos': 100,
			'info': ' Pase doble',
      'url':"img/recompensas/cine.jpg"
		},
		  '9':{
        'id':9,
			'name':'Cortesía Gotcha',
			'reqPtos': 175,
			'info':'Aplicable a 6 personas por cortesía',
      'url':"img/recompensas/gotcha.jpg"
    },
		  '10':{
        'id': 10,
			'name':'Vacaciones adicionales',
			'reqPtos': 200,
			'info':'Válido por un dia extra de vacaciones**',
      'url': "img/recompensas/vacaciones.jpg"
    },
		  '11':{
        'id': 11,
			'name': 'Cortesía comida',
			'reqPtos': 225,
			'info':'Válido por una comida para dos personas co un monto mmaximo de $350',
      'url':"img/recompensas/comida2.jpg"
		}
    }
    });
    
  };

   guardarDatos();
var cargarPagina = function(){
 
  $(document).on("click", ".btn-floating", mostrarModal);
} 

  // var mostrarRecompensa = function(recompensas){
  //      recompensas.forEach(function(recompensa){
  //        // datosModal(recompensa);
  //        console.log(recompensa)

  //      })
     
  //  }
  //  function datosModal(recompensa){
  //   var nombre = recompensa.name;
  //   var puntos = recompensa.reqPtos;
  //   var id = recompensa.id;
  //   var info = recompensa.info;
  //   var imgUrl = recompensa.url
  //  infoModal(nombre, puntos, info, imgUrl);

  // }

 var mostrarTarjetas= function(recompensas){
    var $contenedor =$("#contenedor");
    recompensas.forEach(function(recompensa){
    var $div = $("<div/>");
    $div.addClass("card");
    $div.attr("data-id",recompensa.id);
    $div.text(recompensa.name+" "+recompensa.reqPtos);
    $contenedor.append($div);
    console.log($div);
    });
};

var $name = $(".name");
var $puntos= $(".puntos");
var $info = $(".info");
var $img = $("#img");


var infoModal = function(recompensa,nombre,puntos, info, imgUrl){
  
      $name.text(nombre);
      $puntos.text(puntos);
      $info.text(info);
      $img.attr("src",imgUrl); 
  }
  var mostrarModal = function(e){
     $('.modal').modal('open');
     // if(this.id == id){
         infoModal();
      //}
  }

   firebase.database().ref('/recompensas').on('value', function (snapshot) {
    var recompensas = snapshot.val();
        mostrarTarjetas(recompensas);
  });
   $(document).ready(cargarPagina);

  