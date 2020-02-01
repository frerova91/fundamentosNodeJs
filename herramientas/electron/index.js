const { app, BrowserWindow } = require("electron");

let ventanaPrincipal;

app.on("ready", creandoVentana);

function creandoVentana() {
  ventanaPrincipal = new BrowserWindow({
    width: 800,
    height: 600
  });

  ventanaPrincipal.loadFile("index.html");
}
