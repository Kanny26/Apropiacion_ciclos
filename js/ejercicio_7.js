//se declara suma que acumulara la suma de los numeros
let suma = 0;

//el ciclo for recorre los numeros del 1 al 100
for(let numero = 1; numero <= 100; numero++){

    // Verificamos si el número es mayor a 90 Y además es par
    if(numero > 90 && numero % 2 == 0){
        //si se cumplen las dos condiciones muestra el mensaje indicando el numero que las cumple
        alert(`el numero ${numero} es par y es mayor a 90`)
        break;
    }

    //si no se cumple la condicion anterior, se suma al acumulador suma
    else{
        suma += numero;
    }
}
alert(`la suma total es ${suma}`);