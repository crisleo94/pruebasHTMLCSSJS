/*que diga si un numero es par o impar
    validar si el numero es valido, sino mostrar la ventana de ingreso nuevamente
*/

var numero;
var residuo;

numero = parseInt(prompt("Ingrese el número para validar: ", ""));


while(isNaN(numero)){
    
    numero = parseInt(prompt("Ingrese el número para validar: ", ""));
    
}

residuo = numero%2;

if(residuo == 0){
    alert("El numero es par. ")
}else{
    alert("El numero es impar. ")
}