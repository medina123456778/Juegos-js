var contador = 1; // Inicializamos un contador para llevar el seguimiento de la imagen actual.
var temporizador; // Declaramos una variable para almacenar el identificador del intervalo.

function iniciar() {
    // Esta función se encarga de iniciar el temporizador.
    temporizador = setInterval(rotarImagenes, 3000); // Establecemos un intervalo que ejecutará la función rotarImagenes cada 3000 milisegundos (3 segundos).
}

function rotarImagenes() {
    // Esta función se ejecuta cada vez que se dispara el intervalo.
    if (contador >= 10) { // Si el contador llega a 10 (asumiendo que tienes 10 imágenes), lo reiniciamos a 0.
        contador = 0;
    }

    // Incrementamos el contador en 1 para pasar a la siguiente imagen.
    var img = document.getElementById('imgSlide'); // Obtenemos una referencia al elemento HTML con el id 'imgSlide'.
    img.src = './images/img' + ++contador + '.jpg'; // Actualizamos la propiedad 'src' de la imagen con la ruta de la siguiente imagen.
}

