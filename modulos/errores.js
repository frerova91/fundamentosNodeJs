function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

//COMO LA FUNCION SETTIMEOUT ES ASINCRONA YA NO ESTAMOS EN EL MISMO HILO DE EJECUCION POR LO QUE DEBE TENER SU PROPIO TY/CATCH
function seRompeAsincrona(cb) {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asícnrona");
      cb(err);
    }
  });
}

try {
  //otraFuncion();
  seRompeAsincrona(function(err) {
    console.log(err.message);
  });
} catch (err) {
  console.error("Vaya, algo se ha roto...");
  console.error(err);
  console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("esto de aqui está al final");
