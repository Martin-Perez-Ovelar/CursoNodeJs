let fs = require ("fs");

let texto = "Texto cambiado";

let cambio = fs.writeFileSync("prueba.txt",texto);
