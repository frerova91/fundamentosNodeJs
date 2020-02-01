//PEQUEÑOS TRUCOS  CON METODOS DE CONSOLA
console.time("todo"); //asi sabemos cuanto tarda en ejecutarse el codigo del archivo

// Como saber el tiempo de ejecucion de un processo
let suma = 0;
console.time("bucle");
for (let i = 0; i < 100000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");
//////////////////////////////////////////////

//
let suma2 = 0;
console.time("bucle 2");
for (let j = 0; j < 1000000000; j++) {
  suma2 += 1;
}
console.timeEnd("bucle 2");

console.time("asincrono");
console.log("Empieza el proceso async");
asincrona().then(() => {
  console.timeEnd("asincrono");
});

console.timeEnd("todo"); //asi sabemos cuanto tarda en ejecutarse el codigo del archivo

function asincrona() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("Termina el proceso asíncrono");
      resolve();
    }, 1000);
  });
}
