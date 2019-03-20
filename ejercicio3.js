var numero1;
var numero2;


numero1 = parseInt(prompt("Ingrese un número: ", ""));
numero2 = parseInt(prompt("Ingrese otro número: ", ""));


if (numero1>numero2){
    for (i = numero2; i < numero1; i++){
        console.log(i);
    }
}else {
    for (i = numero1; i < numero2; i++){
        console.log(i);
    }
}



