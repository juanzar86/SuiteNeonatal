function limpiar(card) {
  card.classList.remove("normal", "alerta", "critico");
}

/* pH */
function evaluarPH() {
  const v = parseFloat(document.getElementById("ph").value);
  const card = document.getElementById("card-ph");
  limpiar(card);
  if (isNaN(v)) return;

  if (v >= 7.35 && v <= 7.45) card.classList.add("normal");
  else if ((v >= 7.30 && v < 7.35) || (v > 7.45 && v <= 7.50)) card.classList.add("alerta");
  else card.classList.add("critico");
}

/* pCO2 */
function evaluarPCO2() {
  const v = parseFloat(document.getElementById("pco2").value);
  const card = document.getElementById("card-pco2");
  limpiar(card);
  if (isNaN(v)) return;

  if (v >= 35 && v <= 45) card.classList.add("normal");
  else if ((v > 45 && v <= 55) || (v >= 30 && v < 35)) card.classList.add("alerta");
  else card.classList.add("critico");
}

/* Lactato */
function evaluarLactato() {
  const v = parseFloat(document.getElementById("lactato").value);
  const card = document.getElementById("card-lactato");
  limpiar(card);
  if (isNaN(v)) return;

  if (v < 2) card.classList.add("normal");
  else if (v >= 2 && v <= 4) card.classList.add("alerta");
  else card.classList.add("critico");
}

/* Glucosa */
function evaluarGlucosa() {
  const v = parseFloat(document.getElementById("glucosa").value);
  const card = document.getElementById("card-glucosa");
  limpiar(card);
  if (isNaN(v)) return;

  if (v >= 45 && v <= 125) card.classList.add("normal");
  else if ((v >= 35 && v < 45) || (v > 125 && v <= 150)) card.classList.add("alerta");
  else card.classList.add("critico");
}
