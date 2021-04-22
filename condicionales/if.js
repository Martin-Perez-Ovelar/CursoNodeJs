let superheroes = [
    {
      nombre:"batman",
      edad:29,
      tipo:'usuario'
   },{
      nombre: "superman",
      edad:16,
      tipo:'administrador'
   },{

    nombre:'robin',
    tipo:'administrador'
   }
   
   ]
   
/*
   if(superheroes[0].tipo == "administrador"){
    console.log ("eres admin");

} else{
    console.log ('no eres administrador')

}*/

if(superheroes[0].tipo == "administrador"){
    console.log ("eres admin");


}else if (superheroes[0].nombre == "robin"){
    console.log ("hola robin");

}else if (superheroes[1].nombre == "pepe"){
    console.log ('no eres administrador');

}
else {
    
console.log ("no te conozco")
}





