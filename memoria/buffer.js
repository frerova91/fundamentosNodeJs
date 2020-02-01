// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from("Hola");

// console.log(buffer);

// --

//Creando un abecedario con buffers
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());

/* todo lo hacemos en memoria ademas nos permite modificar los datos como queramos un buffer suele ser algo que biene de un stream. Una ventaja es que el que genera los datos sabe que tipo de dato debe de recibir, su version mas cruda mas basica de los datos asi no tenemos que analizar el tipo de datos pero tenemos que saber que estamos recibiendo por ejemplo una imagen como buffer u texto,etc. */
