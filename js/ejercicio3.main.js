let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Inicializamos un contador de intentos de 0
let intentos = 0;

// Función que se ejecuta cada vez que el usuario intenta adivinar
function adivinar() {
    // Obtenemos el valor ingresado por el usuario en el campo con id "numero"
    let intento = document.getElementById("numero").value;

    // Incrementamos el contador de intentos
    intentos++;

    // Comparamos el intento del usuario con el número secreto
    if (intento == numeroSecreto) {
        // Si son iguales, mostramos un mensaje de felicitación y la cantidad de intentos
        document.getElementById("resultado").innerText = "Correcto! Adivinaste en " + intentos + " intentos.";
    } else if (intento < numeroSecreto) {
        // Si el intento es menor que el número secreto, indicamos que el número es mayor
        document.getElementById("resultado").innerText = "El número es mayor. Intentalo de nuevo.";
    } else {
        // Si el intento es mayor que el número secreto, indicamos que el número es menor
        document.getElementById("resultado").innerText = "El número es menor. Intentalo de nuevo.";
    }
}
