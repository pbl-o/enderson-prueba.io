// Funcionamiento navbar //
$(document).scroll( function(e){
  const y = $("html").scrollTop();
  if(y > 1300) $("nav").addClass("nav-black")
  else $("nav").removeClass("nav-black")
})

// tooltips Iconos redes//

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Popover boton enviar //
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
