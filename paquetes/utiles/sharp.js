//Trabajar con imagenes que trabaja con una libreria de c++
const sharp = require("sharp");

sharp("original.png")
  .resize(80)
  .grayscale()
  .toFile("resized.png");
