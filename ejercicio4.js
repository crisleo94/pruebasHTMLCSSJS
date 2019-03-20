//mostrar todos los numeros impares usando dos numeros intruducidos por el usuario


var numero1;
var numero2;
var residuo;

numero1 = parseInt(prompt("Ingrese el primer número: ", ""));
numero2 = parseInt(prompt("Ingrese el segundo número: ", ""));

if(numero1>numero2){
    for(var i = 0;i < numero1; i++){
        residuo = i%2;
        if(residuo != 0){
            console.log(i);
        }
    }
}else{
    for(var i = 0;i < numero2; i++){
        residuo = i%2;
        if(residuo != 0){
            console.log(i);
        }
    }
}