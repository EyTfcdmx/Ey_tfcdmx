// seccion menu
$( document ).ready(function() {
  $(".button-collapse").sideNav();
  $('select').material_select();

});

// seccion side-nav

//
// $('.button-collapse').sideNav({
//     menuWidth: 300, // Default is 300
//     edge: 'right', // Choose the horizontal origin
//     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//     draggable: true, // Choose whether you can drag to open on touch screens,
//     onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
//     onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed
//   }
// );
//


  // Initialize Firebase
  var config = {
  	apiKey: "AIzaSyC1F-frBdAU_Hm8TgZ6GuS9HDedgDGfn5o",
  	authDomain: "hacer-login-6c332.firebaseapp.com",
  	databaseURL: "https://hacer-login-6c332.firebaseio.com",
  	projectId: "hacer-login-6c332",
  	storageBucket: "hacer-login-6c332.appspot.com",
  	messagingSenderId: "31841737069"
  };

  firebase.initializeApp(config);

  var loggearConFacebook = function () {

  	var provider = new firebase.auth.FacebookAuthProvider();
  	getDataUser(provider)
  }



  var getDataUser = function (provider) {
  	firebase.auth().signInWithPopup(provider).then(function (result) {
  		// This gives you a Facebook Access Token. You can use it to access the Facebook API.
  		var token = result.credential.accessToken;
  		// The signed-in user info.
  		var user = result.user;
  		console.log(user)
//  		document.getElementById("userF").textContent = user.displayName

  	}).catch(function (error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// The email of the user's account used.
  		var email = error.email;
  		// The firebase.auth.AuthCredential type that was used.
  		var credential = error.credential;
  		// ...
  		console.log("error", errorMessage)
  	});
  }
  document.getElementById("btnF").addEventListener("click", loggearConFacebook)

