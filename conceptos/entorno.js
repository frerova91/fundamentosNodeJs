//el nombre propio de las variables de entorno despues de process.env.NOMBRE van en mayuscular es una buena practica que nace de los servidores linux
let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.MI_WEB || "no tengo web";

console.log("Hola " + nombre);
console.log("Mi web es " + web);

//consola  NOMBRE=Freddy node  entorno.js
