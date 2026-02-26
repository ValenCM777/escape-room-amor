// Sala 1: validar fecha
function validarSala1() {
  let respuesta = document.getElementById("respuesta1").value;
  // Ajusta la fecha correcta aquí (ejemplo: 26-11-2025)
  if (respuesta === "26-11-2025") {
    window.location.href = "sala2.html";
  } else {
    alert("Ups, esa no es la fecha correcta 💜🧡");
  }
}

// Sala 2: acertijo matemático
function validarSala2() {
  let respuesta = document.getElementById("respuesta2").value;
  // ((25 * 8) / 2) = 100
  if (respuesta == "100") {
    window.location.href = "sala3.html";
  } else {
    alert("Respuesta incorrecta… inténtalo de nuevo 💜🧡");
  }
}

// Sala 3: acertijo poético (sin reto Python)
function validarSala3() {
  let lugar = document.getElementById("respuesta3").value.toLowerCase();

  if (lugar === "parque jaime duque") {
    window.location.href = "sala4.html";
  } else {
    alert("Respuesta incorrecta. Recuerda resolver el acertijo poético y escribir el lugar correcto 💜🧡");
  }
}

// Sala 4: quiz romántico
function validarSala4() {
  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q3 = document.querySelector('input[name="q3"]:checked');
  let q4 = document.querySelector('input[name="q4"]:checked');

  if (!q1 || !q2 || !q3 || !q4) {
    alert("Debes responder todas las preguntas 💜🧡");
    return;
  }

  // Respuestas correctas: lila, cine, cine, 26-11
  if (q1.value === "lila" && q2.value === "cine" && q3.value === "cine" && q4.value === "26-11") {
    window.location.href = "sala5.html";
  } else {
    alert("Ups, alguna respuesta no es correcta… inténtalo de nuevo 💜🧡");
  }
}
