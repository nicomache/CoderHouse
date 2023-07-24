

let nombre = prompt("Ingrese el nombre");
let edad = prompt("Ingrese la edad");
let direccion = prompt("Ingrese la dirección");

function Persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona(nombre, edad, direccion);

// Crear un mensaje con los atributos de persona1
let mensaje = "Nombre: " + persona1.nombre + "\n" +
              "Edad: " + persona1.edad + "\n" +
              "Dirección: " + persona1.direccion;

// Mostrar el mensaje con alert
alert(mensaje);