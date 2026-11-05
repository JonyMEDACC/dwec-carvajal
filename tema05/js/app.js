/*
  Tarea 5 · DWEC · Jonatan Carvajal Reynaga
  Manipular el DOM.
*/

console.log("app.js cargado");

// ============================================================
// Ejercicio 1 · Selectores y modificación
// ============================================================

function aplicarCambios() {
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const parrafos = document.querySelectorAll("#contenido p");
  parrafos[2].classList.add("text-danger");

  console.log("Ejercicio 1: cambios aplicados");
}

// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const contenido = document.querySelector("#contenido");
  const parrafo = document.createElement("p");
  const numero = contenido.children.length + 1;

  parrafo.textContent = `Párrafo nuevo ${numero}`;
  contenido.append(parrafo);
  document.querySelector("#aviso2").classList.add("d-none");

  console.log(`Ejercicio 2: añadido Párrafo nuevo ${numero}`);
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;
  const aviso = document.querySelector("#aviso2");

  if (ultimo === null) {
    aviso.classList.remove("d-none");
    console.log("Ejercicio 2: no quedan párrafos que eliminar");
  } else {
    ultimo.remove();
    aviso.classList.add("d-none");
    console.log("Ejercicio 2: último párrafo eliminado");
  }
}

// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log(`Ejercicio 3: resaltado activado en ${parrafos.length} párrafos`);
}

// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    error.classList.remove("d-none");
    console.log("Ejercicio 4: campo vacío");
    return;
  }

  document.querySelector("#contenido p").textContent = texto;
  error.classList.add("d-none");
  console.log("Ejercicio 4: texto cambiado con textContent");
}

function cambiarConHtml() {
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    error.classList.remove("d-none");
    console.log("Ejercicio 4: campo vacío");
    return;
  }

  document.querySelector("#contenido p").innerHTML = texto;
  error.classList.add("d-none");
  console.log("Ejercicio 4: texto cambiado con innerHTML");
}

// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function actualizarTotalTareas() {
  const total = document.querySelectorAll("#listaTareas li").length;
  document.querySelector("#totalTareas").textContent = total;
}

function anadirTarea() {
  const input = document.querySelector("#tareaInput");
  const texto = input.value.trim();
  const error = document.querySelector("#error5");

  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: tarea vacía");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "align-items-center", "gap-2");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");

  const span = document.createElement("span");
  span.textContent = texto;

  li.append(checkbox, span);
  document.querySelector("#listaTareas").append(li);

  input.value = "";
  error.classList.add("d-none");
  actualizarTotalTareas();
  console.log(`Ejercicio 5: tarea añadida: ${texto}`);
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");

  if (marcadas.length === 0) {
    error.textContent = "No hay tareas marcadas para borrar.";
    error.classList.remove("d-none");
    console.log("Ejercicio 5: no hay tareas marcadas");
    return;
  }

  for (const casilla of marcadas) {
    casilla.parentElement.remove();
  }

  error.classList.add("d-none");
  actualizarTotalTareas();
  console.log(`Ejercicio 5: borradas ${marcadas.length} tareas completadas`);
}

// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let punto;
  if (ancho < 576) {
    punto = "xs (menos de 576 px)";
  } else if (ancho < 768) {
    punto = "sm (576 a 767 px)";
  } else if (ancho < 992) {
    punto = "md (768 a 991 px)";
  } else if (ancho < 1200) {
    punto = "lg (992 a 1199 px)";
  } else if (ancho < 1400) {
    punto = "xl (1200 a 1399 px)";
  } else {
    punto = "xxl (1400 px o más)";
  }

  document.querySelector("#datoPunto").textContent = punto;
  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log(`Ejercicio 6: datos mostrados, punto de corte ${punto}`);
}
