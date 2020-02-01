const fs = require("fs");

//leer un archivo
function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

//escribir un archivo
function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function(err) {
    if (err) {
      console.error("No he podido escribirlo", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

//borrar un archivo
function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo1.txt', console.log)
borrar(__dirname + "/archivo1.txt", console.log);

//Estas son la principales funciones pero hay muchas mas puedes verlas en la docu de node
