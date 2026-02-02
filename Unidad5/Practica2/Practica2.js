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

//Actividad2
tabla=document.getElementById('table');
var hilera = document.createElement("tr");
	
for (i=0;i<2;i++){
	var td = document.createElement("td");
}
td.textContent=pedirDatos();
hilera.appendChild(td);
tabla.appendChild(hilera);

function pedirDatos(){
	let dato1 = prompt("Introduce tu año de nacimiento.");
	let dato2 = prompt("introduce tu nombre,");
	
	return dato1,dato2;
	
}