let listaContactos = [];

// Función para crear un nuevo contacto y añadirlo a la lista
function crearContacto(id, nombres, apellidos, telefono, ubicacion, ciudad, direccion) {
  // Crear un objeto con la información del contacto
  const nuevoContacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicacion: ubicacion,
    ciudad: ciudad,
    direccion: direccion
  };

  // Añadir el nuevo contacto al array de contactos
  listaContactos.push(nuevoContacto);
}

// Función para eliminar un contacto por su ID
function eliminarContacto(id) {
  // Encontrar el índice del contacto con el ID dado
  const indiceContacto = listaContactos.findIndex(contacto => contacto.id === id);

  // Si el contacto con el ID dado existe, eliminarlo del array
  if (indiceContacto !== -1) {
    listaContactos.splice(indiceContacto, 1);
  }
}

// Ejemplo de uso de las funciones:
crearContacto(1, "Kevin", "Flores", "88263390", "Cortes", "San Pedro Sula", "Col. La Union");
crearContacto(2, "Hannah", "Flores", "33016722", "Cortes", "San Pedro Sula", "Col. La Union");

console.log(listaContactos); // Mostrar la lista de contactos en la consola

eliminarContacto(1); // Eliminar el contacto con ID 1
console.log(listaContactos); // Mostrar la lista actualizada de contactos en la consola