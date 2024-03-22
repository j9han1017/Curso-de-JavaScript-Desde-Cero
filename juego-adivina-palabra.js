let palabraOculta = "javascript";
let intentos = 3;
function verificarSuposicion(suposicion, palabraOculta) {
    if (suposicion.toLowerCase() === palabraOculta) { return true; }
    return false;
}
function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar adivina la palabra oculta"); alert("Tienes 3 intentos para adivinar la palabra");
    alert("-pista- la palabra oculta es un lenguaje de programaciÃ³n");
    while (intentos > 0) {
        let suposicion = prompt("Adivina la palabra: ");
        if (verificarSuposicion(suposicion, palabraOculta)) {
            alert("Â¡Correcto! Has adivinado la palabra.");
            break;
        }
        else {
            intentos--; if (intentos > 0) {
                alert(`Incorrecto, Aun tienes ${intentos} intento restantes`);
            } else { alert(`Agotaste tus intentos, la palarba oculta era ${palabraOculta}`); }
        }
    }
}
jugarAdivinaLaPalabra();