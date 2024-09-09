  function calcular() {
    // Obtenemos los valores numéricos de los inputs, convirtiéndolos a números flotantes
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
  
    // Obtenemos la operación seleccionada
    let operacion = document.getElementById("operacion").value;
  
    // Inicializamos una variable para almacenar el resultado
    let resultado;
  
    // Utilizamos un switch para realizar la operación seleccionada
    switch (operacion) {
      case "+":
        // Si la operación es suma, sumamos los números
        resultado = num1 + num2;
        break;
      case "-":
        // Si la operación es resta, restamos los números
        resultado = num1 - num2;
        break;
      case "*":
        // Si la operación es multiplicación, multiplicamos los números
        resultado = num1 * num2;
        break;
      case "/":
        // Si la operación es división, dividimos los números
        resultado = num1 / num2;
        break;
      default:
        // Si la operación no es válida, mostramos un mensaje de error
        resultado = "Operación no válida";
    }
  
    // Mostramos el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
  }