let saldo = 20000;

for (let i = 0; i < 10; i++) {
    let opcion = prompt('1. Consultar saldo\n2. Retirar dinero\n3. Salir\n¿Qué acción deseas hacer hoy?');

    if (opcion === '1') {
        alert(`Tu saldo es: ${saldo}`);
    } else if (opcion === '2') {
        let retirar = parseInt(prompt('Ingresa el valor que deseas retirar:'));

        if (retirar > saldo) {
            alert(`Saldo insuficiente. Tu saldo es: ${saldo}`);
        } else {
            saldo -= retirar;
            alert(`Has retirado ${retirar}. Tu nuevo saldo es: ${saldo}`);
        }
    } else if (opcion === '3') {
        alert('Gracias por usar el sistema. ¡Hasta luego!');
        break;
    } else {
        alert('Opción inválida. Intenta de nuevo.');
    }

    if (saldo <= 0) {
        alert('Tu saldo se ha agotado.');
        break;
    }
}
