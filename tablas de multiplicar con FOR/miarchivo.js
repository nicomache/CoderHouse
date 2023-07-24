// TABLAS

let num = parseInt(prompt("Ingrese un numero"));

let num2 = parseInt(prompt("Ingrese hasta donde quiere multiplicar su numero"))

document.write("La tabla de su numero es: " + "<br>")
for (i=1; i <= num2 ; i++){
  let res = num * i;
  document.write (num +" * " + i + "= " + res + "<br>")
}