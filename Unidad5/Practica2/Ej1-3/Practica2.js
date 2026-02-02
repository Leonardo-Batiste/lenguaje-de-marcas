/* Actividad1:
mas = document.getElementById("mas");
function mostrarMasTexto(){
	mas.innerHTML = "Se utiliza principalmente del lado del cliente, implementado como parte" 
	+ "de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas[3] y "
	+ "JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a" 
	+ "la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es" 
	+ "también significativo.";
}
mas.addEventListener("click", mostrarMasTexto);
*/

/* 
//Actividad2: Si he usado algun elemento que no aparece en la presentacion, es porque he consultado las guias de MDN
// Crea la funcion
function addRow(TableID){
  //1.Escoges que elemento editar, en este caso una tabla
  let tableRef=document.getElementById(TableID);
  //2.Insertas un <tr>/Creas nueva fila al final(-1)
  let newRow=tableRef.insertRow(-1);
  //3.Insertar dos <td>/creas 2 celdas en la primera posicion(0) y segunda posicion(1)
  let newCell=newRow.insertCell(0);
  let newCell2=newRow.insertCell(1);
  //4.Creo 2 variables que contendran el texto que ira en cada celda
  let texto1=prompt("Introduce tu nombre"); //Esta ira a la celda1
  let texto2=prompt("Introduce el año que nacistes"); //Esta ira a la celda2
  //Añade el texto a la celda, siendo la estructura: tabla>fila nueva>celda>texto
  newCell.textContent=texto1;
  newCell2.textContent=texto2;
}
//llamo a la funcion para que aparezca en el .html
addRow("tabla");
*/

//Actividad3
function mostrarPinguino(){
  const imagen=document.createElement("img");
  imagen.src="img1.png";
  imagen.width=200;
  
  const contenedor=document.getElementById("contenedor-id");
  contenedor.appendChild(imagen);
}

function mostrarJS(){
  const imagen2=document.createElement('img');
  imagen2.src="img2.png";
  imagen2.alt="Logo de JavaScript";
  imagen2.width=200;
  const contenedor=document.getElementById("contenedor-id");
  contenedor.appendChild(imagen2)
}

function crearBotones(){
  const boton=document.createElement("button");
  const boton2=document.createElement("button");
  
  boton.innerText="Pinguino";
  boton2.innerText="JS";
  
  boton.addEventListener("click",mostrarPinguino);
  boton2.addEventListener("click",mostrarJS);
  
  document.body.appendChild(boton);
  document.body.appendChild(boton2);
}

crearBotones();