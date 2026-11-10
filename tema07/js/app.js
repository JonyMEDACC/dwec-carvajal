/*
  Tarea 7 · DWEC · Jonatan Carvajal Reynaga
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
  const precioConDescuento = base - (base * descuento / 100);
  return precioConDescuento + (precioConDescuento * iva / 100);
}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const baseTexto = document.querySelector("#base").value;
  const iva = Number(document.querySelector("#iva").value);
  const descuentoTexto = document.querySelector("#descuento").value;
  const error = document.querySelector("#error1");

  if (baseTexto === "" || Number(baseTexto) < 0) {
    error.textContent = "Introduce un precio base válido.";
    error.classList.remove("d-none");
    return;
  }

  const base = Number(baseTexto);
  let descuento = 0;
  let precioFinal;

  if (descuentoTexto === "") {
    precioFinal = calcularPrecio(base, iva);
  } else {
    descuento = Number(descuentoTexto);
    if (descuento < 0 || descuento > 100 || Number.isNaN(descuento)) {
      error.textContent = "El descuento debe estar entre 0 y 100.";
      error.classList.remove("d-none");
      return;
    }
    precioFinal = calcularPrecio(base, iva, descuento);
  }

  error.classList.add("d-none");
  pintarLista("#salida1", [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuento} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ]);
  console.log("Ejercicio 1: precio final →", precioFinal);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Las cuatro funciones siguientes ya funcionan, pero sus callbacks están escritos con function, como en el tema 6.

function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);   // una copia: sort cambia el original
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);
  if (antigua === undefined) {
    document.querySelector("#mensaje2").textContent = "No hay películas anteriores a 1990.";
    pintarLista("#salida2", []);
    console.log("Ejercicio 2: find → undefined");
    return;
  }
  pintarLista("#salida2", [comoTexto(antigua)]);
  document.querySelector("#mensaje2").textContent = "Primera película anterior a 1990.";
  console.log("Ejercicio 2: find →", antigua);
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  const resultado = [];
  for (const elemento of lista) {
    resultado.push(operacion(elemento));
  }
  return resultado;
}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// El modelo: funcionará cuando hayas escrito transformar()
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso = 1) {
  let cuenta = 0;
  return function () {
    cuenta += paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  }

  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const total = this.notas.reduce((suma, nota) => suma + nota, 0);
    return total / this.notas.length;
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];

const alumno1 = new Alumno("Jonatan Carvajal Reynaga", "2.º DAW");
alumno1.anadirNota(8);
alumno1.anadirNota(7.5);
alumnos.push(alumno1);

const alumno2 = new AlumnoFCT("Sara Gil", "2.º DAW", "TecnoSur");
alumno2.anadirNota(6);
alumno2.anadirNota(9);
alumnos.push(alumno2);

// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombreInput = document.querySelector("#nombre5");
  const cursoInput = document.querySelector("#curso5");
  const empresaInput = document.querySelector("#empresa5");
  const notasInput = document.querySelector("#notas5");
  const error = document.querySelector("#error5");

  const nombre = nombreInput.value.trim();
  const curso = cursoInput.value.trim();
  const empresa = empresaInput.value.trim();
  const notasTexto = notasInput.value.trim();

  if (nombre === "") {
    error.textContent = "Escribe el nombre del alumno.";
    error.classList.remove("d-none");
    return;
  }

  const nuevoAlumno = empresa === ""
    ? new Alumno(nombre, curso)
    : new AlumnoFCT(nombre, curso, empresa);

  if (notasTexto !== "") {
    const notas = notasTexto.split(",").map((texto) => Number(texto.trim()));
    const hayNoValidas = notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10);
    if (hayNoValidas) {
      error.textContent = "Las notas deben ser números entre 0 y 10.";
      error.classList.remove("d-none");
      return;
    }
    notas.forEach((nota) => nuevoAlumno.anadirNota(nota));
  }

  alumnos.push(nuevoAlumno);
  error.classList.add("d-none");
  nombreInput.value = "";
  empresaInput.value = "";
  notasInput.value = "";
  pintarAlumnos();
  console.log("Ejercicio 5: alumno creado →", nuevoAlumno);
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const milisegundosDia = 1000 * 60 * 60 * 24;
  return Math.round((fecha - hoy) / milisegundosDia);
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  const dias = diasHasta(fecha);
  const fechaTexto = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  if (dias > 0) {
    salida.textContent = `Faltan ${dias} días: será ${fechaTexto}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${fechaTexto}.`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} días: fue ${fechaTexto}.`;
  }
  console.log("Ejercicio 6: días →", dias);
}

function iniciales(nombreCompleto) {
  return nombreCompleto
    .trim()
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra[0].toUpperCase())
    .join("");
}

function crearUsuario(nombreCompleto) {
  const letras = iniciales(nombreCompleto).toLowerCase();
  const numero = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return letras + numero;
}

function mostrarIniciales() {
  const nombre = document.querySelector("#nombre6").value.trim();
  const salida = document.querySelector("#salida6b");
  if (nombre === "") {
    salida.textContent = "Escribe un nombre completo.";
    return;
  }

  const letras = iniciales(nombre);
  const usuario = crearUsuario(nombre);
  salida.textContent = `Iniciales: ${letras} · usuario: ${usuario}`;
  console.log("Ejercicio 6: iniciales y usuario →", letras, usuario);
}
