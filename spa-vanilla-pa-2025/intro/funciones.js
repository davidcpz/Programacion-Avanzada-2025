/* funcion declaration  */
function saludar(nombre){
    console.log("bienvenido, " + nombre + "!")
}
saludar ("david");

/* funtion explession */

const cliente = function(nombreCliente){
    console.log("mostrando datos del cliente: " + nombreCliente + ",Edad: " + edadCliente);

}
cliente ("juan", "25");

function actividad(nombre ='walter white', nnombreActividad='profesior de quimica'){
    console.log (`el cliente ${nombre} esta realizando la actividad : $ {nombreActividad}`);

}
actividad("ernesto", "programacion en javaScript");
actividad("juan", "desarrollador web")
