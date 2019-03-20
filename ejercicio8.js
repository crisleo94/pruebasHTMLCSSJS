/*
    Crear una calculadora:
    -Pedir numeros por pantalla (en caso esté malo repetir solicitud)
    -Mostrar tanto en el body, consola y alerta el resultado de la suma, resta
    multiplicación y división de las dos cifras ingresadas
*/

var suma;
var resta;
var multi;
var div;

var numero1 = parseInt(prompt("Ingrese el primer número: ", ""));
var numero2 = parseInt(prompt("Ingrese el segundo número: ", ""));

while (numero1<0 ||numero2<0 || isNaN(numero1) && isNaN(numero2)){
    numero1 = parseInt(prompt("Ingrese el primer número: ", ""));
    numero2 = parseInt(prompt("Ingrese el segundo número: ", ""));
}

suma = numero1+numero2;
resta = numero1-numero2;
multi = numero1*numero2;
div = numero1/numero2;

document.write("<h1>Operaciones con los números "+numero1+" y "+numero2+"</h1>");
document.write("<p>La suma es igual a "+suma+"</p><br>");
document.write("<p>La resta es igual a "+resta+"</p><br>");
document.write("<p>La multiplicación es igual a "+multi+"</p><br>");
document.write("<p>La división es igual a "+div+"</p><br>");

console.log("La suma es igual a "+suma);
console.log("La resta es igual a "+resta);
console.log("La multiplicación es igual a "+multi);
console.log("La división es igual a "+div);

alert("La suma es igual a "+ suma);
alert("La resta es igual a "+ resta);
alert("La multiplicación es igual a "+ multi);
alert("La división es igual a "+ div);