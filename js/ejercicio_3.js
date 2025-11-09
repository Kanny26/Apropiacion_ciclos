//se inicia el ciclo for, se ejecuta mientras 'numero' sea menor o igual a 10

for(let numero = 1; numero <= 10; numero++){

    //Se solicita ingresar un numero y el texto ingresado se convierte en un entero
    let num = parseInt(prompt("Ingresa un numero: ")) ;
    
    //verifica si el numero es mayoro o igual a 50
    if(num >= 50){
        //si se cumple mostrara el numero
        alert(`el numero mayor de 50 es: ${num}`)
        
        //incrementa 'numero' en 1, se salta una iteracion
        numero++
    }
}