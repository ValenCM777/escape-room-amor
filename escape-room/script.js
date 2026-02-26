// Sala 1 - Fecha de inicio
function validarSala1() {
  let clave = document.getElementById("respuesta1").value;
  if (clave === "23-10-2025") {
    window.location.href = "sala2.html";
  } else {
    alert("Clave incorrecta. Intenta de nuevo, agente.");
  }
}

// Sala 2 - Acertijo matemático más difícil
function validarSala2() {
  let clave = document.getElementById("respuesta2").value;
  // Operación: ((25 * 8) / 2) = 100
  if (clave === "100") {
    window.location.href = "sala3.html";
  } else {
    alert("Respuesta incorrecta. Intenta de nuevo, agente.");
  }
}

// Sala 3 - Lugar favorito
function validarSala3() {
  let clave = document.getElementById("respuesta3").value.toLowerCase();
  if (clave === "parque jaime duque") {
    window.location.href = "sala4.html";
  } else {
    alert("Clave incorrecta. Intenta de nuevo, agente.");
  }
}

// Sala 4 - Preguntas románticas
function validarSala4(opcion) {
  if (
    opcion === "lila" ||
    opcion === "museo" ||
    opcion === "cine" ||
    opcion === "26-11"
  ) {
    window.location.href = "sala5.html";
  } else {
    alert("Respuesta incorrecta. Intenta de nuevo, agente.");
  }
}
