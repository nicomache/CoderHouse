const calculadora = (prestamo) => {
     
	switch(prestamo) {
	   case "A":
	   case "a":
		   return 20000*0.23;
		   break;
	   case "B":
	   case "b":
		   return 40000*0.21;
		   break;
	   case "C":
	   case "c":
		   return 70000*0.17;
		   break;
	   case "D":
	   case "d":
		   return 90000*0.15;
		break;
		default:
		   return "opción incorrecta"
		   break;

	}

}


 let nombre;


do {   
    let nombre = prompt("Ingrese su nombre") ;
    let saludo = prompt("Hola " + nombre + " , quieres ser socio de NM?");
    if (saludo == "si" || saludo == "SI" || saludo == "Si"){
            let opcionPrincipal = prompt("Felicitaciones " + nombre + ". Ya eres socio/a del banco NM.\n Que desea hacer: \n A: Sacar un préstamo \n B: Sacar una tarjeta")
            if (opcionPrincipal == "A" || opcionPrincipal == "a"){
                var prestamo = prompt("Desea sacar un préstamo de: \n A: 20mil(23% de inetéres)\n B: 40mil(21% de inetéres)\n C:70mil(l7% de inetéres)(\n D:90mil(15% de inetéres)")
                calculadora(prestamo)
                var resultado = calculadora(prestamo)
                alert("Su préstamo total es de: " + resultado );
                var cuotas = prompt("En cuantas cuotas los quiere?:\nA: 6 \nB: 8 \nC: 12")
                alert("Felicitaciones su préstamo ha sido habilitado")
            
            }
            else if(opcionPrincipal == "B" || opcionPrincipal == "b"){
                let tarjeta = prompt("A: Tarjeta de crédito\nB: Tarjeta de débito")
                if (tarjeta == "A" || tarjeta == "a"){
                    alert("Felicitaciones " + nombre + ", ha sido acreedor de una tarjeta de crédito")
                }
                else if(tarjeta == "B" || tarjeta == "b"){
                    alert("Felicitaciones "+ nombre + ", ha sido acreedor de una tarjeta de débito")
                }
            }
            else{
                alert("Opción incorrecta")
            }
    }
    else if(saludo == "NO" || saludo == "no" || saludo =="No"){
        alert("Que lástima " + nombre + ", que tengas un buen día, hasta la próxima")
    }
    else {
        alert("Opción incorrecta")
    }
}

while (nombre != "")





