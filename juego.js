const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt("Adivina el nÃºmero secreto entre el 1 al 10"));
console.log(`Este es el nÃºmero con el que juegas ${numeroJugador}`);
if (numeroJugador === numeroSecreto) {
    console.log("Â¡Felicidades, adivinaste el nÃºmero secreto!");
} else if (numeroJugador < numeroSecreto) {
    console.log("El numero es demasiado bajo, intenta de nuevo");
} else {
    console.log("El nÃºmero es muy alto, intenta de nuevo");
}