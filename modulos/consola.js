// Console

//FORMA EN LA QUE SE PINTA EN LA PANTALLA SEGUN LA SITUACION ESPESIFICA
// console.log()
// console.info()
// console.warn()
// console.error()

//DIBUJANDO UNA TABLA CON INFORMACION ESPECIFICADA
// console.table()
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

//AGRUPANDO EL OUTPUT DE LA CONSOLA PARA AGRUPAR LA INFORMACION CON UNA IDENTACION ADECUADA PARA DIFERENCIAR MEJOR LO QUE PASA
// console.group();
// console.groupEnd();

// EJEMPLO 1
// console.group('despedida');
// 	console.log('adios');
// 	console.group();
// 		console.log('Carlos');
// 	console.groupEnd();
// console.groupEnd();

//ESTO PERMITE CONTAR EL NUMERO DE VECES QUE SE A EJECUTADO ESTE console. por si quieres ver las veces que pasas dentro de un bucle o el numero de veces que se ejecuta una funcion,etc.
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
