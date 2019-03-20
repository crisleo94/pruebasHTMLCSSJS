//mostrar la tabla de multiplicar de un numero introducido

var numero;

numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: ", ""))

for (var i = 1; i <=10; i++){
    document.write("<p>El número "+numero+" multiplicado por "+i+" es igual a "+(numero*i)+"</p><br>");
}