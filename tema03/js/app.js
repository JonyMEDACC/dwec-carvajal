/*
  Tarea 3 · DWEC · Jonatan Carvajal Reynaga
  Variables, tipos y conversiones.
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");

// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  const edad = 20;
  const nombre = "Jonatan";
  const estudiante = true;
  const datoNulo = null;
  let sinValor;
  const numeroGrande = 10n;

  console.log("edad =", edad, "→", typeof edad);
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("estudiante =", estudiante, "→", typeof estudiante);
  console.log("datoNulo =", datoNulo, "→", typeof datoNulo);
  console.log("sinValor =", sinValor, "→", typeof sinValor);
  console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);

  sinValor = "Ahora tiene valor";
  console.log("sinValor después =", sinValor, "→", typeof sinValor);
}

// Ejercicio 2 · Conversiones explícitas
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const a = String(123);          // espero "123" string
  const b = Number("123");        // espero 123 number
  const c = Number("12abc");      // espero NaN number
  const d = Number("");           // espero 0 number
  const e = Number(true);         // espero 1 number
  const f = Boolean(0);           // espero false boolean
  const g = Boolean("texto");     // espero true boolean
  const h = Boolean("");          // espero false boolean

  console.log("String(123) →", a, typeof a);
  console.log('Number("123") →', b, typeof b);
  console.log('Number("12abc") →', c, typeof c);
  console.log('Number("") →', d, typeof d);
  console.log("Number(true) →", e, typeof e);
  console.log("Boolean(0) →", f, typeof f);
  console.log('Boolean("texto") →', g, typeof g);
  console.log('Boolean("") →', h, typeof h);
}

// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  console.log('"5" - 2 →', "5" - 2);       // espero 3
  console.log('"5" + 2 →', "5" + 2);       // espero "52"
  console.log("true + 1 →", true + 1);     // espero 2
  console.log('"10" / 2 →', "10" / 2);     // espero 5
  console.log('0 == "0" →', 0 == "0");     // espero true
  console.log('"" + 1 →', "" + 1);         // espero "1"

  console.log('5 == "5" →', 5 == "5");     // espero true
  console.log('5 === "5" →', 5 === "5");   // espero false

  console.log("0 == false →", 0 == false);       // espero true
  console.log("0 === false →", 0 === false);     // espero false

  console.log("null == undefined →", null == undefined);     // espero true
  console.log("null === undefined →", null === undefined);   // espero false
}

// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  const nombre = "Jonatan Carvajal Reynaga";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2º DAW";
  const aficion = "videojuegos";

  let horasEstudio = 4;
  horasEstudio += 2;

  const ficha = `Soy ${nombre}. Estudio ${ciclo}, curso ${curso}. Mi afición son los ${aficion} y esta semana he estudiado ${horasEstudio} horas.`;

  alert(ficha);
  console.log(ficha);

  const fichaConMas =
    "Soy " + nombre +
    ". Estudio " + ciclo +
    ", curso " + curso +
    ". Mi afición son los " + aficion +
    " y esta semana he estudiado " + horasEstudio + " horas.";

  console.log("Ficha concatenada:", fichaConMas);
  console.log("¿Las dos fichas son iguales? →", ficha === fichaConMas);
}
