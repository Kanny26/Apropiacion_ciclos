//inicializa el ciclo for, declaramos la variable corredores, el ciclo empieza en 0 y se repite hasta que haya pasado todos los corredores
for (let corredores = 0; corredores <= 4; corredores++) {
    
    //cuenta las vueltas que da el corredor
    let vueltas = 0;

    //el ciclo for controla que los corredores deben dar maximo 4 vueltas
    for(let i = 1; i <= 4; i++){

        //incrementa en 1 las vueltas cada que da una
        vueltas++;

        //le muestra al corredor cuantas vueltas a dado
        alert(`El corredor ha dado ${vueltas} vuelta(s)`);
        
        //pregunta si el corredor esta cansado o no, para continuar la siguiente vuelta
        let opcion = prompt('¿El corredor está cansado? si / no').toLowerCase();

        //si esta cansado puede descansar
        if (opcion === "si") {
            alert('El corredor puede descansar');
            break;
        }

    }
}
