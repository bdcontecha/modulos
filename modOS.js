// crea uan variable os para que obtenga información sobre el sistema operativo de la computadora
const os=require('os');

//muestra por consola el nombre del sistema operativo
console.log(os.type());

//muestra por consola la ruta de la cadena del directorio de inicio del usuario actual
console.log(os.homedir());

//muestra por consola el tiempo de actividad del sistema en número de segundos.
console.log(os.uptime());

//muestra por consola la información sobre el usuario efectivo actualmente
console.log(os.userInfo());

