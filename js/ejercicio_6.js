for(let boletos = 1; boletos <=15; boletos){
    let edad = (prompt('ingrese su edad: '))
    if(edad < 18){
        alert('no puede ver esta pelicula')
        continue;
    }
    else{
        alert('boleta vendida')
        break;
    }
}