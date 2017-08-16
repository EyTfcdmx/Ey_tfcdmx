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


  function guardarDatos() {

    firebase.database().ref("/").set({
    	promocionales:{  
      art1:{
     	'name': 'Bolígrafo',
     	'reqPtos': 25 
     },
      art2:{
     	'name': 'Cilindro',
     	'reqPtos': 30
     },
      art3:{
     	'name': 'Pin metálico',
     	'reqPtos': 50
     },
     art4:{
        'name': 'Taza Térmica',
        'reqPtos':50
     },
     art5:{
     	'name':'Carpeta de piel',
     	'reqPtos': 125
     },
     art6:{
     	'name': 'Chamarra de piel',
     	'reqPtos': 150
     }

  },
	reembolsables:{
	  vale1:{
	  	'name':'Vale gastos reembolsables válido hasta $100*',
	  	'reqPtos':75
	  },
	  vale2: {
	  	'name': 'Vale gastos reembolsables válido hasta $250*',
	  	'reqPtos': 150
	  }
	},
	experience:{
		exp1:{
			'name': 'Cortesía cine',
			'reqPtos': 100,
			'info': ' Pase doble'
		},
		exp2:{
			'name':'Cortesía Gotcha',
			'reqPtos': 175,
			'info':'Aplicable a 6 personas por cortesía'
		},
		exp3:{
			'name':'Vacaciones adicionales',
			'reqPtos': 200,
			'info':'Válido por un dia extra de vacaciones**'
		},
		exp4:{
			'name': 'Cortesía comida',
			'reqPtos': 225,
			'info':'Válido por una comida para dos personas co un monto mmaximo de $350'
		}
      }

    });
  };

   guardarDatos();