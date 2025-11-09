//se inicializa la variable saldo

let saldo = 20000;

//el cilco while se ejecuta mientras saldo sea mayor a 0
while(saldo > 0) {

    //se muestra un menu y se guarda la eleccion del usuario, para mostrar informacion y/o solicitar segun la opcion seleccionada
    let opcion = prompt('1. Consultar saldo\n2. Retirar dinero\n3. Salir\n¿Qué acción deseas hacer hoy?');

    //la opcion '1' muestra el saldo 
    if (opcion === '1') {
        alert(`Tu saldo es: ${saldo}`);
        //la opcion '2 permite solicitar un monto para retirar'
    } else if (opcion === '2') {
        let retirar = parseInt(prompt('Ingresa el valor que deseas retirar:'));

        //si el saldo es menor al monto a retirar, se muestra que el salod es insuficiente
        if (retirar > saldo) {
            alert(`Saldo insuficiente. Tu saldo es: ${saldo}`);
            //si el saldo es menor al monto que desea retirar entonces puede retirar 
        } else {
            saldo -= retirar;
            alert(`Has retirado ${retirar}. Tu nuevo saldo es: ${saldo}`);
        }
        //se sale del sistema con la opcion '3'
    } else if (opcion === '3') {
        alert('Gracias por usar el sistema. ¡Hasta luego!');
        break;
    } else {
        alert('Opción inválida. Intenta de nuevo.');
    }

}
