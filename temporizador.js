// es una funcion que imprime un mensaje por consola
function mostrarTema(tema){
  console.log('Estoy Aprendiendo ' + tema);
}

//mostrarTema('Node Js');
//Higher-Order Programming
/*nos permite tratar a las funciones como objetos que se pueden pasar como
argumentos y retornar desde otras funciones
*/

//muestra un retraso el mensaje de la funcion asignado a la varible tema Node Js 
setTimeout(mostrarTema,1000,'Node Js');