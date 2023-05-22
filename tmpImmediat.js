//es una función que imprime un mensaje
function mostrarTema(tema){
    console.log('Estoy aprendiendo '+ tema);
}

//mensaje que se muestra por consola
console.log('Antes de setImmediate()');

//se usa para ejecutar una función justo después de que finaliza el ciclo de eventos actual
//el cual llama la función mostrarTema y llena la variable tema con Node Js
setImmediate(mostrarTema,'Node Js');

//mensaje que se muestra por consola
console.log('Despúes de setImmediate()');