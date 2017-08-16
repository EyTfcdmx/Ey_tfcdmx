var btnf= document.getElementById("btnF")

btnf.addEventListener("click", mostrarModal)

 $('.modal').modal();
					  
					  
					  
function mostrarModal(){

	swal({
  title: "",
  text: "INGRESA TU NUMERO DE EMPLEADO:",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  animation: "slide-from-top",
  inputPlaceholder: "NUEMERO EMPLEADO"
},
function(inputValue){
  if (inputValue === false) return false;
  
  if (inputValue === "" ) {
    swal.showInputError("INGRESA TU NUMERO DE EMPLEADO");
    return false
  }
		
  
  swal("", "Tu numero de empleado " + inputValue, "success");
});
}

