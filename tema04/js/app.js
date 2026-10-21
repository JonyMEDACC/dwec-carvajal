/*
  Tarea 4 · DWEC · Jonatan Carvajal Reynaga
  Calculadora y bucles.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: intento de división entre 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede calcular el módulo entre 0.", "danger");
    console.warn("Módulo: intento de usar 0 como divisor");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de comparar.", "danger");
    console.warn("Cuál es mayor: falta algún número");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`, "info");
    console.log(`Comparación: ${n1} es mayor que ${n2}`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`, "info");
    console.log(`Comparación: ${n2} es mayor que ${n1}`);
  } else {
    mostrar(`${n1} y ${n2} son iguales.`, "info");
    console.log(`Comparación: ${n1} y ${n2} son iguales`);
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1.", "danger");
    console.warn("Par o impar: falta el número 1");
  } else if (!Number.isInteger(n1)) {
    mostrar(`${n1} tiene decimales: no es ni par ni impar.`, "warning");
    console.warn(`Par o impar: ${n1} tiene decimales`);
  } else {
    const tipo = n1 % 2 === 0 ? "par" : "impar";
    mostrar(`${n1} es ${tipo}.`, "info");
    console.log(`Par o impar: ${n1} es ${tipo}`);
  }
}


// ============================================================
// Comprobación común de los bucles
// ============================================================

function comprobarRepeticiones() {
  const veces = leerNumero("numero1");

  if (
    Number.isNaN(veces) ||
    !Number.isInteger(veces) ||
    veces > MAXIMO_REPETICIONES
  ) {
    mostrar(`Escribe un número entero de ${MAXIMO_REPETICIONES} o menos.`, "danger");
    console.warn("Bucle: número no válido");
    return null;
  }

  return veces;
}

function textoTotal(contador) {
  return contador === 1
    ? "Total: 1 repetición"
    : `Total: ${contador} repeticiones`;
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// ============================================================

function bucleFor() {
  const veces = comprobarRepeticiones();

  if (veces === null) {
    return;
  }

  limpiarSalida();
  let contador = 0;

  for (let i = 1; i <= veces; i++) {
    contador++;
    anadirLinea(`for · repetición ${i} de ${veces}`);
  }

  anadirLinea(textoTotal(contador));
  console.log(`for con ${veces}: ${contador} repeticiones`);
}

function bucleWhile() {
  const veces = comprobarRepeticiones();

  if (veces === null) {
    return;
  }

  limpiarSalida();
  let i = 1;
  let contador = 0;

  while (i <= veces) {
    contador++;
    anadirLinea(`while · repetición ${i} de ${veces}`);
    i++;
  }

  anadirLinea(textoTotal(contador));
  console.log(`while con ${veces}: ${contador} repeticiones`);
}

function bucleDoWhile() {
  const veces = comprobarRepeticiones();

  if (veces === null) {
    return;
  }

  limpiarSalida();
  let i = 1;
  let contador = 0;

  do {
    contador++;
    anadirLinea(`do...while · repetición ${i} de ${veces}`);
    i++;
  } while (i <= veces);

  anadirLinea(textoTotal(contador));
  console.log(`do...while con ${veces}: ${contador} repeticiones`);
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function colorBadge(numero) {
  return numero % 2 === 0 ? "primary" : "warning";
}

function badgesFor() {
  const veces = comprobarRepeticiones();

  if (veces === null) {
    return;
  }

  limpiarSalida();
  let contador = 0;

  for (let i = 1; i <= veces; i++) {
    contador++;
    anadirBadge(i, colorBadge(i));
  }

  anadirLinea(textoTotal(contador));
  console.log(`Badges for con ${veces}: ${contador} repeticiones`);
}

function badgesWhile() {
  const veces = comprobarRepeticiones();

  if (veces === null) {
    return;
  }

  limpiarSalida();
  let i = 1;
  let contador = 0;

  while (i <= veces) {
    contador++;
    anadirBadge(i, colorBadge(i));
    i++;
  }

  anadirLinea(textoTotal(contador));
  console.log(`Badges while con ${veces}: ${contador} repeticiones`);
}

function badgesDoWhile() {
  const veces = comprobarRepeticiones();

  if (veces === null) {
    return;
  }

  limpiarSalida();
  let i = 1;
  let contador = 0;

  do {
    contador++;
    anadirBadge(i, colorBadge(i));
    i++;
  } while (i <= veces);

  anadirLinea(textoTotal(contador));
  console.log(`Badges do...while con ${veces}: ${contador} repeticiones`);
}
