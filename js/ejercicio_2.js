//dentro del ciclo for, se declara la variable estudiante

for(let estudiante = 1; estudiante <= 5; estudiante ++){
    
    //en consola se pregunta si el estudiante tiene carnet y debe responder si lo tiene o no
    console.log("¿El estudiante tiene carnet estudiantil?");
    let ingresa = prompt("Responda si o no");

    //se usa tolowercase, para que se evalue bandera sin importar como se escriba si
    let bandera = (ingresa.toLowerCase() == "si" ? "si puede ingresar" : "no puede ingresar");
    //si escribe si, ingresa y sino no ingresa
    console.log(bandera);
}