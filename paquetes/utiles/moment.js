//trabajar con fechas, tienes que ver la documentacion tiene muchisimas opciones de fechas y como cambiarlasa,etc.
const moment = require("moment");

let ahora = moment();

// console.log(ahora.toString());
console.log(ahora.format("YYYY/MM/DD - HH:mm"));
