function eliminarDesventajas() {
  const seccionDesventajas = document.getElementById('seccion-desventajas');
  const mensaje = document.getElementById('mensaje');
  const boton = document.getElementById('btnEliminar'); 
  
  if (seccionDesventajas) {
    seccionDesventajas.remove();
  }
}