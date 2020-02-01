//PROCESOS HIJOS ES LA EJECUCION DE PROCESOS DEL SISTEMA U OTRO LENGUAJE DENTRO DE NODE MEJOR EXPLICADO ACONTINUACION:
//https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

//EXEC en este caso es un proceso del sistema linux que nos permite ejecutar comandos del sistema operativo
const { exec, spawn } = require("child_process");

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })

//SPAWN  en este caso es para situaciones mas complejas ya que permite ejecutar procesos aprate o por debajo y hacer mas cosas con ese proceso usamos este. Como este es una instancia del objeto child_process significa que implementa los EventEmmiter API por lo que podremos registrar handlers para eventos directamente en el proceso hijo.

/* Ejemplo:
    child.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
    }); */

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function(dato) {
  console.log("¿Está muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", function() {
  console.log("el proeso terminó");
  console.log(proceso.killed);
});
