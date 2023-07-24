let nombre = prompt("ingrese el nombre")
let edad = prompt("ingrese la edad");
let direccion =prompt("ingrese la direccion");


function Persona (nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}



const persona1 = new Persona (nombre, edad, direccion)

console.log("Nombre:", persona1.nombre);
console.log("Edad:", persona1.edad);
console.log("Dirección:", persona1.direccion);
