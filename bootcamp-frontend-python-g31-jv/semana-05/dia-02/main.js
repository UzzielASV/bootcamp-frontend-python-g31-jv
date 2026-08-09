// console.log("Hola, JS Intermedio!");

// "Tipos de datos primitivos (numbers, string, boolean, null, underfined, symbol, bigint)"

// "Tipos de datos no primitivos (object, array, function)"

// Arrays

// Un array puede contener elementos de cualquier tipo: string, numbers, boolean, null, undefined, object, array, function, etc.

// Declaración

const arrayVacio = []; // Array vacío
const listaNumeros = [1, 2, 3, -4, +5]; // Array de números
const listaValores = ["1", "2", "Uzziel", "Solís", "Vera"]; // Array de strings

console.log(arrayVacio) // []
console.log(listaNumeros) // [1, 2, 3, -4, 5]
console.log(listaValores) // ["1", "2", "Uzziel", "Solís", "Vera"]

// Lectura de los elementos de un array

console.log(listaValores[2]) // Uzziel
console.log(listaValores[2] + ' ' + listaValores[3]) // Uzziel Solís

// Escritura de un array

listaValores[4] = "Vega"
console.log(listaValores)

Object.freeze[listaValores]
listaValores[4] = "Vega"
console.log(listaValores) // ["1", "2", "Uzziel", "Solís", "Vega"]

// Insertar nuevos elementos a un array al final (push)

const listaColores = ["Rojo", "Verde", "Azul"];
console.log(listaColores) // ["Rojo", "Verde", "Azul"]

listaColores.push("Amarillo");
console.log(listaColores) // ["Rojo", "Verde", "Azul", "Amarillo"]

// Remover los elementos a un array

listaColores.pop(); // Remueve el último elemento del array
console.log(listaColores) // ["Rojo", "Verde", "Azul"]

// Insertar nuevos elementos a un array al inicio (unshift)

listaColores.unshift("Naranja");
console.log(listaColores) // ["Naranja", "Rojo", "Verde", "Azul"]

// Remover los elementos a un array al inicio (shift)

listaColores.shift(); // Remueve el primer elemento del array
console.log(listaColores) // ["Rojo", "Verde", "Azul"]

// Insertar nuevos elementos a un array en una posición específica (splice)

listaColores.splice(1, 0, "Amarillo"); // Inserta "Amarillo" en la posición 1
console.log(listaColores) // ["Rojo", "Amarillo", "Verde", "Azul"]

// Remover elementos de un array en una posición específica (splice)

listaColores.splice(2, 1); // Remueve 1 elemento en la posición 2
console.log(listaColores) // ["Rojo", "Amarillo", "Azul"]

// Obtener el tamaño de un array (length)

console.log(listaColores.length) // 3

// Obtener el ultimo elemento de un array

console.log(listaColores[listaColores.length - 1]) // "Azul"

// Obtener el primer elemento de un array

console.log(listaColores[0]) // "Rojo"

// Obtener el elemento en una posición específica (at)

console.log(listaColores.at(1)) // "Amarillo"

// TODO: Otras funciones - slice (Investigación)

// "Metodos de arrays (forEach, map, filter, reduce, includes, , , sort)"

// Metodo includes: Devuelve true si el elemento existe en el array, de lo contrario devuelve false

const listaLenguajes = ["JavaScript", "Python", "Java", "C++", "C#", "PHP"];

console.log(listaLenguajes.includes("Python")) // true
console.log(listaLenguajes.includes("Ruby")) // false

// Metodo filter: Devuelve un nuevo array con los elementos que cumplan con la condición especificada

const resultado = listaLenguajes.filter(function (lenguaje) {
    return lenguaje.length > 3; // Filtra los lenguajes con longitud mayor a 3
});
console.log(resultado) // ["JavaScript", "Python", "Java", "C++", "C#", "PHP"]

// Metodo map: Devuelve un nuevo array con los resultados de la función aplicada a cada elemento del array original

const resultadoMap = listaLenguajes.map(function (lenguaje) {
    return lenguaje.toUpperCase(); // Convierte cada lenguaje a mayúsculas
});
console.log(resultadoMap) // ["JAVASCRIPT", "PYTHON", "JAVA", "C++", "C#", "PHP"]

// Metodo sort: Ordena los elementos de un array en su lugar y devuelve el array. El orden predeterminado es ascendente, según la posición del valor Unicode de cada elemento.

const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(numeros.sort()) // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const palabras = ["banana", "apple", "cherry", "date"];
console.log(palabras.sort()) // ["apple", "banana", "cherry", "date"]

// Metodo forEach: Ejecuta una función proporcionada una vez por cada elemento del array

listaLenguajes.forEach(function (lenguaje) {
    console.log(lenguaje); // Imprime cada lenguaje en la consola
});

// Metodo reduce: Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor

const suma = numeros.reduce(function (acumulador, valorActual) {
    return acumulador + valorActual; // Suma los valores del array
}, 0);
console.log(suma) // 44

// Objetos, una forma de guardar información en pares de clave-valor

const persona = {
    nombre: "Uzziel",
    apellido: "Solís",
    edad: 46,
    ciudad: "Arequipa",
    hobbies: ["programar", "leer", "viajar"],
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Arequipa",
        pais: "Perú"
    },
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }
};

console.log(persona.nombre) // Uzziel
console.log(persona.apellido) // Solís
console.log(persona.edad) // 46
console.log(persona.ciudad) // Arequipa
console.log(persona.hobbies) // ["programar", "leer", "viajar"]
console.log(persona.direccion.calle) // Calle Falsa
console.log(persona.direccion.numero) // 123
console.log(persona.direccion.ciudad) // Arequipa
console.log(persona.direccion.pais) // Perú
persona.saludar() // Hola, mi nombre es Uzziel Solís

// Eliminar las propiedades de un Objeto

delete persona.edad; // Elimina la propiedad "edad" del objeto "persona"
console.log(persona.edad) // undefined  

// Insertar nuevas propiedades a un Objeto

persona.email = "uzziel.s.v@icloud.com"; // Inserta la propiedad "email" al objeto "persona"
console.log(persona.email) //