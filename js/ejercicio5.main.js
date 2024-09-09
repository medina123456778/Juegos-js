function cambiarColor(color) {
    /*Obtiene los elementos con los ID "rojo", "amarillo" y "verde" y cambia su color de fondo según el parámetro "color"*/
    document.getElementById("rojo").style.backgroundColor = color === "rojo" ? "red" : "grey";
    document.getElementById("amarillo").style.backgroundColor = color === "amarillo" ? "yellow" : "grey";
    document.getElementById("verde").style.backgroundColor = color === "verde" ? "green" : "grey";
  }
  
  function iniciarSemaforo() {
    //Cambia el color a rojo y luego a amarillo y verde con pausas
    setTimeout(() => cambiarColor("rojo"), 0);
    setTimeout(() => cambiarColor("amarillo"), 1000);
    setTimeout(() => cambiarColor("verde"), 5000);
    // Reinicia el ciclo
    setTimeout(iniciarSemaforo, 8000);
  }