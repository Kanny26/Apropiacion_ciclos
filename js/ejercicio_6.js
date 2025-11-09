//se inicializa la variable vendidos para contar cuantos boletos se han vendido
let vendidos = 0;

//se repetira mientras se hayan vendido menos de 15 boletos
while(vendidos < 15){
    //el usuario ingresa su edad
    let edad = parseInt(prompt('ingrese su edad: '));

    //se evalua si es menor de 18 o mayor
    if(edad < 18){

        //si es menor no podra ver la pelicula
        alert('no puede ver esta pelicula')
        continue;
    }
    //si es mayor se le vende la boleta
    else{
        alert('boleta vendida')

        //aumentamos el contador de boletas vendidas en 1
        vendidos++;
    }
}