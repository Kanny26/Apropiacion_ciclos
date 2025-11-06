let vueltas = 0;

for (let corredores = 0; corredores <= 4; corredores++) {
    vueltas++; 
    alert(`El corredor ha dado ${vueltas} vuelta(s)`);

    let opcion = prompt('¿El corredor está cansado? si / no');
    let bandera = (opcion === "si" ? "puede descansar" : "debe seguir");

    if (bandera === "puede descansar") {
        alert('El corredor puede descansar');
        break;
    }
}
