//Iniciamos un ciclo 'for' que se repetirá 5 veces, uno por cada usuario
for (let usuario = 1; usuario <=5; usuario++){

    //el usuario ingresa sus datos 
    let nombre = prompt(`${usuario}: Ingresa tu nombre`);
    let edad = prompt(`${usuario}: Ingresa tu edad`);

    //si es mayor de edad muestra la informacion sino no la muestra 
    if (edad >= 18){
        alert(`${nombre} tiene ${edad} años y es mayir de edad`);
    }
}