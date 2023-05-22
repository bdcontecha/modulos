//ctrl + k + s ==> lista de metodos abreviados
//imprimir por consola !Hola, Mundo¡
console.log('!Hola, Mundo¡');
//ctrl + shift + s ==> Guardar como
//ctrl + s ==> Guardar
//Imprima un mensaje de advertencia en la Consola
console.warn(('!Ocurrio un Error.....¡'));
//Muestra un mensaje de error en la Consola
console.error('!Ocurrio un Grave Error¡');
//error de sintaxis
console.error(new Error('!Grave error¡'))
//crear un new objeto 
const errors = new Error('!Grave error¡')
//llama el objeto y muestra el mensaje de error por consola
console.error(errors.message)
