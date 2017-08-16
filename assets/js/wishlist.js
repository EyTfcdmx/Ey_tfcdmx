var cargarPagina = function() {
  $(".btn-del").click(borrarRecompensa);
}

var borrarRecompensa = function() {
  $(this).parent().remove();
}

$(document).ready(cargarPagina);
