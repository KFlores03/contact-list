// Punto 1
let listaDeContactos = [
  { nombreApellido: "Kevin Flores" },
  { nombreApellido: "Mariela Pineda" },
  { nombreApellido: "Hannah Flores" },
  { nombreApellido: "Ana Martínez" },
];

console.log(listaDeContactos[0].nombreApellido); // Salida: "Kevin Flores"
console.log(listaDeContactos[1].nombreApellido); // Salida: "Mariela Pineda"
console.log(listaDeContactos[2].nombreApellido); // Salida: "Hannah Flores"
console.log(listaDeContactos[3].nombreApellido); // Salida: "Ana Martínez"

// Punto 2
function agregarContacto(nombreApellido) {
   let nuevoContacto = { nombreApellido: nombreApellido };

  listaDeContactos.push(nuevoContacto);
}

agregarContacto("Sam Pineda");

console.log(listaDeContactos);

// Punto 3
function borrarContacto(indice) {
    if (indice >= 0 && indice < listaDeContactos.length) {
         listaDeContactos.splice(indice, 1);
    } else {
      console.log("Índice de contacto inválido. No se realizó ninguna eliminación.");
    }
  }
  
  borrarContacto(1); // Elimina el contacto en el índice 1
  
  console.log(listaDeContactos);

  // Punto 4
  function imprimirContactos() {
    console.log("Lista de contactos:");
    listaDeContactos.forEach(function(contacto, indice) {
      console.log(indice + 1 + ". " + contacto.nombreApellido);
    });
  }
  
  imprimirContactos();


