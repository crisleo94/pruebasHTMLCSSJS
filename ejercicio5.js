//mostrar todos los divisores de un numero ingresado

var numero;

numero = parseInt(prompt("Ingrese el numero para calcular sus divisores: ", ""))

for (var i = 0; i <= numero; i++){
    if(numero%i == 0){
        console.log(i);
    }
}