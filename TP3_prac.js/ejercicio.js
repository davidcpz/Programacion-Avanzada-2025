/* 1) Suma de números únicos
Tema: Arrays + Set + Funciones
Consigna: Implementá sumUnique(nums) que reciba un array y devuelva la suma
de los números únicos (ignora duplicados, ignora no-numéricos).
Ejemplos:
● sumUnique([1,2,2,3]) → 1+2+3 = 6
● sumUnique([1,'2',2,3,'a']) → 1+2+3 = 6
Criterios: Usar Set o filtrar por primera aparición; validar Number.isFinite.
Starter: */


/* function sumUnique(nums) {
// tu código
} */

function sumUnique(nums) {
    /* filtro solo los valores numericos */
    let soloNumeros = nums.filter(n => Number.isFinite(n));

    /* uso Set para quedarme con los unicos */
    let unicos = new Set(soloNumeros);

    /* convierto el set en arraw y sumamos con reduce */
        return [...unicos].reduce((acc, num) => acc + num, 0);
}
    console.log(sumUnique([1,2,2,,3])); 
    console.log(sumUnique([1,'2',2,3,'a']));




/* 2) Seleccionar propiedades
Tema: Objetos + Funciones puras
Consigna: Escribí pick(obj, keys) que devuelva un nuevo objeto con solo las
claves indicadas (ignorar las que no existan).
Ejemplos:
pick({a:1,b:2,c:3}, ['a','c','z']) → {a:1, c:3}
Criterios: No mutar obj. */

/* function pick(obj, keys) {
/ tu código
} */

function pick(obj, keys) {

    if (obj === null || typeof obj !== 'object' || !Array.isArray(keys)) return {};

    const resultado= {};
    for (const key of keys) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) {
            resultado[k] = obj[k];
        }
    }
    return resultado;
}   

console.log(pick({a:1,b:2,c:3}, ['a','c','z']));
console.log(pick({user: 'Ana', pass: '123', rol:'admin'}, ['user', 'rol']));

/* otra version mejorada */
const pickReduce = (obj, keys) =>
  Array.isArray(keys)
    ? keys.reduce((acc, k) => {
        if (Object.prototype.hasOwnProperty.call(obj, k)) acc[k] = obj[k];
        return acc;
      }, {})
    : {};

console.log(pickReduce({a:1,b:2,c:3}, ['a','c','z'])); // {a:1, c:3}



/* 
3) Agrupar por clave o función
Tema: Arrays + Objetos + HOF
Consigna: groupBy(list, keyOrFn) agrupa una lista por:

● string: nombre de propiedad
● función: (item) => clave

Ejemplos:
groupBy([{t:'a'},{t:'b'},{t:'a'}], 't') → { a:[...], b:[...] }
groupBy([6,7,8,9], n => n%2?'impar':'par') → { par:[6,8],
impar:[7,9] }
Criterios: Retornar objeto plano; no mutar list.

function groupBy(list, keyOrFn) {
/ tu código
} */

function groupBy(list, keyOrFn) {
    if (!Array.isArray(list)) throw new TypeError('groupBy espera un array como primer argumento');
    const isFn = typeof keyOrFn === 'function';
    if (!isFn && typeof keyOrFn !== 'string') throw new TypeError('keyOrFn debe ser una string (propiedad) o una función');

    return list.reduce((acc, item) => {
        const rawKey = isFn ? keyOrFn(item) : item[keyOrFn];
        const key = String(rawKey);
        if (!Object.prototype.hasOwnProperty.call(acc, key)) acc[key] = [];
        acc[key].push(item);
        return acc;
  }, {});

} 

console.log(groupBy([{t:'a'},{t:'b'},{t:'a'}], 't'));
// → { a: [ { t: 'a' }, { t: 'a' } ], b: [ { t: 'b' } ] }

console.log(groupBy([6,7,8,9], n => n % 2 ? 'impar' : 'par'));
// → { par: [6,8], impar: [7,9] }






/* 4) Ordenar por múltiples campos
Tema: Arrays + sort + comparadores
Consigna: sortByMany(list, specs) donde specs es un array de reglas { key,
dir } con dir='asc'|'desc'.
Ejemplo:
Ordenar usuarios por lastName asc y age desc.
Criterios: No mutar el array original (clonar antes).
function sortByMany(list, specs) {
// tu código
} */

function sortByMany(list, specs) {
  // clonamos para no mutar el array original
  const cloned = [...list];

  cloned.sort((a, b) => {
    for (const { key, dir } of specs) {
      // tomamos el valor: puede ser string de propiedad o función
      const valA = typeof key === 'function' ? key(a) : a[key];
      const valB = typeof key === 'function' ? key(b) : b[key];

      // comparación normal
      if (valA < valB) return dir === 'desc' ? 1 : -1;
      if (valA > valB) return dir === 'desc' ? -1 : 1;
      // si son iguales, sigo al siguiente criterio
    }
    return 0; // si todos empatan
  });

  return cloned;
}

const users = [
  { firstName: 'Ana', lastName: 'Gomez', age: 30 },
  { firstName: 'Luis', lastName: 'Perez', age: 25 },
  { firstName: 'María', lastName: 'Gomez', age: 22 },
  { firstName: 'Jorge', lastName: 'Perez', age: 40 }
];

console.log(
  sortByMany(users, [
    { key: 'lastName', dir: 'asc' },
    { key: 'age', dir: 'desc' }
  ])
);



/* 5) deepEqual (objetos/arrays simples)
Tema: Objetos + Recursividad
Consigna: deepEqual(a,b) compara primitivos, arrays y objetos planos (sin
funciones ni fechas).
Ejemplos:
deepEqual({x:[1,2]}, {x:[1,2]}) → true
deepEqual({x:1}, {x:'1'}) → false
Criterios: Mismo conjunto de claves; manejar null.
function deepEqual(a, b) {
// tu código
} */

function deepEqual(a, b) {
  // caso base: valores estrictamente iguales
  if (a === b) return true;

  // si alguno es null o no es objeto → comparar directamente
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  // obtener claves de cada objeto
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // si tienen distinta cantidad de claves → no son iguales
  if (keysA.length !== keysB.length) return false;

  // comparar cada clave recursivamente
  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log(deepEqual({x:[1,2]}, {x:[1,2]})); // true
console.log(deepEqual({x:1}, {x:'1'}));       // false
console.log(deepEqual([1,2,3], [1,2,3]));     // true
console.log(deepEqual([1,2], [1,2,3]));       // false
console.log(deepEqual(null, null));           // true
console.log(deepEqual(null, {}));             // false




/* 6) Validador de paréntesis
Tema: Estructuras de datos (Stack)
Consigna: isBalanced(s) retorna true si ()[]{} están balanceados y bien
anidados.
Ejemplos:
"([]{})" → true, "(]" → false, "([)]" → false
Criterios: Usar un stack (array como pila).
function isBalanced(s) {
// tu código
} */

function isBalanced(s) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (const char of s) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char); // apertura → guardo en la pila
    } else if ([')', ']', '}'].includes(char)) {
      if (stack.pop() !== pairs[char]) return false; // cierro → comparo con último
    }
  }

  return stack.length === 0; // si pila quedó vacía → balanceado
}


console.log(isBalanced("([]{})")); // true
console.log(isBalanced("(]"));     // false
console.log(isBalanced("([)]"));   // false
console.log(isBalanced("((()))")); // true
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false

/* 7) Frecuencia de palabras
Tema: Map/Set + Strings
Consigna: wordFreq(text) que devuelva un Map con la frecuencia de cada
palabra case-insensitive y sin puntuación básica.
Ejemplo:
"Hola, hola! chau." → { hola:2, chau:1 }
Criterios: Normalizar a minúsculas; remover [,.:;!?].
function wordFreq(text) {
// tu código
} */


function wordFreq(text) {
  // 1. Normalizar a minúsculas
  let lower = text.toLowerCase();

  // 2. Remover signos de puntuación básicos
  let clean = lower.replace(/[.,:;!?]/g, "");

  // 3. Separar en palabras por espacios
  let words = clean.split(/\s+/);

  // 4. Crear un Map para las frecuencias
  let freq = new Map();

  // 5. Recorrer cada palabra
  for (let w of words) {
    if (w === "") continue; // ignorar vacíos
    freq.set(w, (freq.get(w) || 0) + 1);
  }

  // 6. Devolver el Map
  return freq;
}

console.log(wordFreq("Hola, hola! chau."));
// Map { 'hola' => 2, 'chau' => 1 }




/* 9) Debounce
Tema: Funciones de orden superior + timers
Consigna: debounce(fn, delay) devuelve una función que pospone la
ejecución de fn hasta que pasen delay ms sin ser llamada de nuevo.
Ejemplo: útil para input de búsqueda.
Criterios: Preservar this y argumentos; cancelar timer previo.
function debounce(fn, delay) {
// tu código
}
 */

function debounce(fn, delay) {
  // 1. Guardar el id del timer
  let timerId;

  // 2. Retornar una nueva función envolvente
  return function (...args) {
    // 3. Guardar el contexto (this)
    const context = this;

    // 4. Si ya hay un timer, cancelarlo
    clearTimeout(timerId);

    // 5. Crear un nuevo timer
    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const log = debounce((msg) => console.log(msg), 1000);

log("Hola");
log("Chau");
log("Final"); // Solo este se mostrará después de 1s




/* 10) Asincronismo: withTimeout + allSettledLite
Tema: Promesas + control de tiempo
Consigna A: withTimeout(promise, ms) rechaza con Error('Timeout') si
promise no resuelve en ms.
Consigna B: allSettledLite(promises) devuelve un array de objetos {
status:'fulfilled', value } | { status:'rejected', reason } (sin usar
Promise.allSettled).
Ejemplos:
● withTimeout(fetchX(), 1000)
● allSettledLite([ok(), falla()]) → [{status:'fulfilled',
value:...},{status:'rejected', reason:...}]

function withTimeout(promise, ms) {
// tu código
}
function allSettledLite(promises) {
// tu código
} */




/* parte A */

function withTimeout(promise, ms) {
  // 1. Crear promesa que rechaza después de ms
  let timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), ms);
  });

  // 2. Competencia entre la promesa original y la de timeout
  return Promise.race([promise, timeout]);
}


withTimeout(new Promise(res => setTimeout(() => res("ok"), 500)), 1000)
  .then(console.log)   // "ok"
  .catch(console.error);

withTimeout(new Promise(res => setTimeout(() => res("tarde"), 2000)), 1000)
  .then(console.log)
  .catch(console.error); // Error: Timeout


/* parte B */

function allSettledLite(promises) {
  // 1. Mapear cada promesa a una versión "segura"
  let wrapped = promises.map(p =>
    p
      .then(value => ({ status: "fulfilled", value }))
      .catch(reason => ({ status: "rejected", reason }))
  );

  // 2. Esperar a todas las promesas envueltas
  return Promise.all(wrapped);
}


let ok = () => Promise.resolve(42);
let fail = () => Promise.reject("Oops");

allSettledLite([ok(), fail(), Promise.resolve("hola")])
  .then(console.log);

/*
[
  { status: 'fulfilled', value: 42 },
  { status: 'rejected', reason: 'Oops' },
  { status: 'fulfilled', value: 'hola' }
]
*/

