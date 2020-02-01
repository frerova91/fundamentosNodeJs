// const p = require('process');

process.on("beforeExit", () => {
  console.log("el proceso va a terminar");
});

//La diferencia de exit con beforeExit es que en exit ya Nos desconectamos del evento loop asi que el setTimeout no funcionara en este caso no se ejecutara. NOTA: en este punto una vez ejecutado el exit todo es sincrono y en un solo hilo.
process.on("exit", () => {
  console.log("Ale, el proceso acabó");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 0);
});

setTimeout(() => {
  console.log("Esto se va a ver");
}, 0);
//Pertenece a los modulos globales
//

//Capturando las ecepciones que pueden parar nuestros procesos desde process.
//para que nos puede servir esto para pasarlo a un archivo un .log u un correo que te avise que hay errores,etc.
process.on("uncaughtException", (err, origen) => {
  console.error("Vaya se nos ha olvidado capturar un error");
  setTimeout(() => {
    console.log("Esto viene desde las excepciones");
  }, 0);
});

funcionQueNoExiste();

console.log("Esto si el error no se recoje, no sale");
