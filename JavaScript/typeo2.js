var intervalo;
function compararTextos() {
  // Obtener los valores de los textarea
  var textoOriginal = document.getElementById("textoOriginal").value;
  var textoComparar = document.getElementById("textoComparar").value;

  // Obtener el elemento h3
  var h3Element = document.getElementById("resultadoJuego");

  // Comparar los textos y actualizar el contenido de h3
  if (textoOriginal === textoComparar) {
    h3Element.textContent = "CORRECTO";
  } else {
    h3Element.textContent = "INCORRECTO";
  }
  detenerCronometro();
}

function iniciarCronometro() {
  var segundos = 0;
  var minutos = 0;
  var h4Element = document.getElementById("tiempoJuego");

  intervalo = setInterval(function() {
    segundos++;

    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }

    var tiempoFormateado = (minutos < 10 ? "0" : "") + minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
    h4Element.textContent = tiempoFormateado;

  }, 1000); // Actualizar cada segundo (1000 milisegundos)
}

window.onload = function() {
  iniciarCronometro();
};
function detenerCronometro() {
  clearInterval(intervalo);
}
function c1(variable) {
  // Obtener los valores de los textarea
  var textoOriginal = variable;
  var textoComparar = document.getElementById("textoComparar").value;

  // Obtener el elemento h3
  var h3Element = document.getElementById("resultadoJuego");

  // Comparar los textos y actualizar el contenido de h3
  if (textoOriginal === textoComparar) {
    h3Element.textContent = "CORRECTO";
  } else {
    h3Element.textContent = "INCORRECTO";
  }
  detenerCronometro();
}
