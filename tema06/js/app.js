/*
  Tarea 6 · DWEC · Jonatan Carvajal Reynaga
  Objetos y arrays.

  En esta práctica se usan objetos, arrays y sus métodos.
  Los resultados se pintan con createElement, textContent, classList y append.
  Todas las funciones usan function, sin funciones flecha.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: convierte un array en texto, por ejemplo [1, 2, 3]
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Jonatan",
  apellidos: "Carvajal Reynaga",
  edad: 27,
  curso: "2.º DAW",
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const lista = document.createElement("ul");
  lista.classList.add("list-group", "mb-2");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    lista.append(li);
  });

  const presentacion = document.createElement("p");
  presentacion.classList.add("fst-italic", "mb-0");
  presentacion.textContent = estudiante.presentarse();

  salida.append(lista, presentacion);
  console.log("Ejercicio 1: ficha", estudiante);
}

function cumplirAnios() {
  estudiante.edad += 1;
  console.log("Ejercicio 1: nueva edad →", estudiante.edad);
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  console.log("Ejercicio 1: curso eliminado →", estudiante.curso);
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
  console.log("Ejercicio 2: colores →", comoTexto(colores));
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
  console.log("Ejercicio 2: aviso →", mensaje);
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", color);
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No quedan colores para quitar.");
    return;
  }

  const eliminado = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: pop →", eliminado);
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No quedan colores para quitar.");
    return;
  }

  const eliminado = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: shift →", eliminado);
}

mostrarColores();


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });

  console.log("Ejercicio 3: productos pintados →", lista.length);
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos en el catálogo.";
  console.log("Ejercicio 3: catálogo completo");
}

function ordenarPorPrecio() {
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro.";
  console.log("Ejercicio 3: ordenados por precio", copia);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });

  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Productos de más de 50 €: " + caros.length + ".";
  console.log("Ejercicio 3: productos de más de 50 € →", caros);
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if (texto === "") {
    mensaje.textContent = "Escribe un nombre para buscar.";
    pintarProductos([]);
    console.log("Ejercicio 3: búsqueda vacía");
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  if (encontrado === undefined) {
    mensaje.textContent = "No se ha encontrado ningún producto.";
    pintarProductos([]);
    console.log("Ejercicio 3: find → undefined");
    return;
  }

  pintarProductos([encontrado]);
  mensaje.textContent = "Producto encontrado: " + encontrado.nombre + ".";
  console.log("Ejercicio 3: find →", encontrado);
}

mostrarProductos();


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Jonatan",
  notas: [],
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }

    this.notas.push(nota);
    return true;
  },
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }

    const suma = this.notas.reduce(function (acumulado, nota) {
      return acumulado + nota;
    }, 0);

    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  const media = document.querySelector("#media");
  contenedor.textContent = "";

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1");

    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }

    badge.textContent = nota;
    contenedor.append(badge);
  });

  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }

  console.log("Ejercicio 4: notas →", alumno.notas, "media →", alumno.media().toFixed(2));
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  const valor = casilla.value.trim();

  if (valor === "") {
    error.textContent = "Escribe una nota antes de añadirla.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: casilla vacía");
    return;
  }

  const nota = Number(valor);

  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: nota no válida →", valor);
    return;
  }

  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
  console.log("Ejercicio 4: nota añadida →", nota);
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
  console.log("Ejercicio 4: notas borradas");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });

  document.querySelector("#salida5").textContent = "Doble: " + comoTexto(dobles) + "\nOriginal: " + comoTexto(numeros);
  console.log("Ejercicio 5: map →", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  document.querySelector("#salida5").textContent = "Pares: " + comoTexto(pares) + "\nOriginal: " + comoTexto(numeros);
  console.log("Ejercicio 5: filter →", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (acumulado, numero) {
    return acumulado + numero;
  }, 0);

  document.querySelector("#salida5").textContent = "Suma: " + suma + "\nOriginal: " + comoTexto(numeros);
  console.log("Ejercicio 5: reduce →", suma);
}

function verCadena() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  const dobles = pares.map(function (numero) {
    return numero * 2;
  });

  const suma = dobles.reduce(function (acumulado, numero) {
    return acumulado + numero;
  }, 0);

  document.querySelector("#salida5").textContent =
    "1. filter → " + comoTexto(pares) + "\n" +
    "2. map → " + comoTexto(dobles) + "\n" +
    "3. reduce → " + suma + "\n" +
    "Original → " + comoTexto(numeros);

  console.log("Ejercicio 5: cadena →", pares, dobles, suma);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-light", "border", "text-dark", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    contenedor.append(badge);
  });

  console.log("Ejercicio 6: ciudades →", ciudades);
}

function verSlice() {
  const resultado = ciudades.slice(2, 5);
  document.querySelector("#salida6").textContent =
    "slice(2, 5) devuelve " + comoTexto(resultado) + "\n" +
    "Ciudades que siguen en el array: " + ciudades.length + ".";
  console.log("Ejercicio 6: slice →", resultado, "original →", ciudades);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");

  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de tres ciudades. Pulsa Restaurar para continuar.";
    console.log("Ejercicio 6: splice cancelado, hay que restaurar");
    return;
  }

  const eliminadas = ciudades.splice(2, 2);
  salida.textContent =
    "splice(2, 2) devuelve " + comoTexto(eliminadas) + "\n" +
    "Ciudades que quedan: " + ciudades.length + ".";
  mostrarCiudades();
  console.log("Ejercicio 6: splice →", eliminadas, "quedan →", ciudades);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  document.querySelector("#salida6").textContent = "Ciudades restauradas.";
  console.log("Ejercicio 6: ciudades restauradas");
}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();
  const salida = document.querySelector("#salida6");

  if (nombre === "") {
    salida.textContent = "Escribe el nombre exacto de una ciudad.";
    console.log("Ejercicio 6: búsqueda vacía");
    return;
  }

  const incluida = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);

  salida.textContent =
    "includes(\"" + nombre + "\") → " + incluida + "\n" +
    "indexOf(\"" + nombre + "\") → " + posicion;

  console.log("Ejercicio 6: búsqueda →", nombre, incluida, posicion);
}

mostrarCiudades();
