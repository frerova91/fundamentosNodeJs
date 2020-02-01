const puppeteer = require("puppeteer");

//Esta es una funcion autoinvocada o ejecutada
/* ejemplo:

(async () => {
  "algo";
})(); 

*/

(async () => {
  // Nuestro codigo
  console.log("Lanzamos navegador!");
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false }); //abriendo navegador web y ademas verlo

  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  //Vamos aver el h1 de esta pagina en la consola del navegador
  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);

    return h1.innerHTML;
  });

  console.log(titulo1);

  console.log("Cerramos navegador...");
  browser.close();
  console.log("Navegador cerrado");
})();

//Para que nos sirve todo esto, bueno asi podemos extraer informacion de paginas web la podemos enviar a un fichero u hacer lo que queramos
