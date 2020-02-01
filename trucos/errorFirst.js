function asincrona(callback) {
  setTimeout(function() {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e); //Si no hay nada el segundo parametro es undefined de lo contrario denbe user , null u otra variable,funcion,etc.
    }
  }, 1000);
}

asincrona(function(err, dato) {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;
    // throw err; // NO VA A FUNCIONAR
  }

  console.log("todo ha ido bien, mi data es", dato);
});
