// Declaramos una variable llamada 'numero' 
let numero; 

// Iniciamos un bucle for que va desde 1 hasta 20 
for (numero = 1; numero <= 20; numero++) { 

    // Verificamos si el número actual es múltiplo de 3 usando el operador módulo (%)
    // Si el residuo de dividir 'numero' entre 3 es igual a 0, significa que es múltiplo de 3
    if (numero % 3 === 0) { 

        // Si la condición es verdadera, mostramos una alerta indicando el número
        alert(`El número ${numero} es múltiplo de 3`); 
    } 
}
