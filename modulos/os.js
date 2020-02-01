//MODULO PARA EL SISTEMA OPERATIVO
const os = require("os");

// console.log(os.arch()); ARQUITECTURA DE LOS SISTEMAS
// console.log(os.platform()); PLATAFORMAS LINUX WINDOWS,ETC

// console.log(os.cpus().length); TODO SOBRE LOS CPU.

// console.log(os.constants); SEÑALES DEL SISTEMA Y PRIORIDADES,ETC.

//CON ESTO VEMOS EL ESPACIO EN MEMORIA LO QUE PERMITE EVALUAR SI PODEMOS REALIZAR X OPERACION SI TENEMOS O NO LA MEMORIA SUFICIENTE DISPONIBLE (RAM).
/* const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
} */

// console.log(os.freemem()); VER LA MEMORIA
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem())); VER EL TOTAL DE LA MEMORIA RAM

// console.log(os.homedir()) // DIRECTORIO RAIZ
// console.log(os.tmpdir()) // ARCHIVOS TEMPORALES

//console.log(os.hostname()); // HOSTNAME DE LA MAQUINA
console.log(os.networkInterfaces()); // INTERFASES DE RED

//ASI PODEMOS TRABAJAR CON PROCESOS o INTERFASES  DE BAJO NIVEL EN NODE
