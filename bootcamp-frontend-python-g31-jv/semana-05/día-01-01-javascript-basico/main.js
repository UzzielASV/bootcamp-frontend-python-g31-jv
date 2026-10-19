// Imprime la linea en la consola del navegador

console.log("¡Hola JS!")

// 1.- COMENTARIOS, Javascript ignora estas líneas y sirve para explicar el código.

// Esto es un comentario de una línea.

/* 
    Esto es un comentario
    de
    varias
    líneas.
*/

// 2.- Tipos de Datos

// Primitivos básicos:

// 2.1.- Number (números)

// Ejemplo: 123. 34.89, -67, 0

console.log(20)
console.log(typeof 20)  // number
console.log(123)
console.log(typeof 123)  // number
console.log(34.89)
console.log(typeof 34.89)  // number
console.log(-67)
console.log(typeof -67)  // number
console.log(0)
console.log(typeof 0)  // number

// El numero maximo y minino que soporta JS

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// 2.2.- String (texto)

console.log("Uzziel Solís")
console.log(typeof "Uzziel")  // string
console.log('Solís')
console.log(typeof 'Solís')  // string

// 2.3.- Boolean (verdadero o falso)

console.log(true)
console.log(false)

// 2.4.- undefined (no tiene valor aún)

let x // Estoy declarando una variable
console.log(x)

// 2.5.- null (intencionalmente está vacio)

let nombre = null
console.log(nombre)

// Ejercicio, varificar que tipo de datos devuelven las siguientes líneas

console.log (typeof 10)  // number
console.log (typeof "Hola")  // string
console.log (typeof true)  // boolean
console.log (typeof undefined)  // undefined
console.log (typeof null)  // object <-- Este es un error (bug) de JS

// 3.- Variables (Guardar datos)

// const (valores que no cambian durante su ejecución)

const pi = 3.141599

console.log(pi)

// pi = 4.988888 // Uncaught TypeError: Assigment to constant variable.

// let (pueden cambiar los valores durante la ejecución del programa)

let edad = 45
console.log(edad)

edad = 46
console.log(edad)

// 4.- Operadores matemáticos

console.log(1 + 3)
console.log(6 - 5)
console.log(2 * 8)
console.log(2 / 8)
console.log(10 / 2)
console.log(7 % 2) // Residuo
console.log(3 ** 2) // Exponente
console.log(Math.pow(3, 2)) // Exponente

// Ejercicio: Dadas dos variables, a con valor 10 y b con valor 3. Realiza una operación que permita obtener el residuo de la división entre a y b, Luego muestra el resultado en consola.

// Mi respuesta

/*let a = 10
let b = 3

console.log(a % b)*/

// Respuesta del docente

const a = 10
const b = 3

const residuo = a % b
console.log(residuo)

// 5.- Comparaciones

// Igualdad débil ==

console.log(1 == "1")

// Igualdad estricta (REOMENDACIÓN: Usar siempre)

console.log(1 === "1") // false (compara el valor y el tipo de dato)

// 6.- Operadores lógicos (AND (&&), OR (||), NEGACIÓN (!))

console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // false

// EJERCICIOS

// 1.- Definir las varibles para hallar el área de un triángulo. Base = 10, Altura = 5. Imprimir el resultado en la consola.

const base = 10
const altura = 5

const area = (base * altura) / 2
console.log(area)

// 7.- Concatenación (unir textos)

let nombre2 = "Uzziel"
let edad2 = 45

console.log("Hola" + nombre2) // HolaUzziel (sin espacio)
console.log("Hola " + nombre2) // Hola Uzziel (con espacio)
console.log("Hola " + nombre2 + ", tienes " + edad2 + " años.") // Hola Uzziel, tienes 45 años.

// Mejor forma de concatenar (template strings) - backtick (option + }) - acento grave (fn + `)

console.log(`Hola ${nombre2}, tienes ${edad2} años.`)

// 8.- Condicionales (if - else)

let numero = 4

if (numero % 2 === 0) { // Si es verdadera la condición se ejecuta el bloque entre las llaves.
    console.log('Es par')
}

let nota = 18

if (nota >= 13) {
    console.log('Aprobado')
} else {
    console.log('Desaprobado')
}

const heroe = 'Spiderman'

if (heroe === 'Batman') {
    console.log('Hola soy Bruce Wayne')
} else if (heroe === 'Spiderman') {
    console.log('Hola soy Peter Parker')
} else if (heroe === 'Iroman') {
    console.log('Holas soy Tony Star')
} else {
    console.log('No soy un heroe jeje')
}

// TODO: Investiguen la estructura switch

// 9.- Estructuras repetitivas (FOR, WHILE, DO WHILE)

// for (Sirve para repetir una o varias instrucciones)

// Ejercicio:
// 1.- Imprimir en consila los números del 0 al 9

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

// Ejercicio 01
for (let i = 0; i < 10; i++) { // La i es una variable, puede tener otros nombres.
    console.log(i)
}

// while

let j = 0

while (j < 10) { // si no colocamos un contador se vuelve en Loop infinito
    console.log('while', j)

    j++
}

// do while

// TODO: investiguen la diferencia con while.

// Ejercicios:

// 2.- Dado un número, mostrar "par y mayor a 10", "par y menor o igual a 10", "Impar"

// 3.- Dado un numero entero, escribe un programa que:
// - Muestre "fizzbuzz" si el número es divisible entre 3 y 5.
// - Muestre "fizz" si el número es divisible solo entre 3.
// - Muestre "buzz" si el número es divisible solo entre 5.
// - En cualquier otro caso, debe mostrar el mismo número.

// Ejercicio 02
const ingresaDato = 12

if (ingresaDato % 2 !== 0) {
    console.log('Impar')
} else if (ingresaDato > 10) {
    console.log('Par y mayor a 10')
} else {
    console.log('Par y menor o igual a 10')
}

// Ejercicio 03
const dato = 10

if (dato % 3 === 0 && dato % 5 === 0) {
    console.log('fizzbuzz')
} else if (dato % 3 === 0) {
    console.log('fizz')
} else if (dato % 5 === 0) {
    console.log('buzz')
} else {
    console.log(dato)
}

// 10.- Función

// Una función es un bloque de código reutilizable que hace una tarea.

// ENTRADA -> Lógica -> Salida del resultado

// Función básica

function saludar() {
    console.log('Hola Function')
}

saludar() // Ejecuta la función

// Funciones con parametros

function saludo(nombre) {
    console.log('Hola ' + nombre)
}

saludo('Uzziel Solís')
saludo()

// Funciones que retornan valores

function sumar(a, b) {
    const suma = a + b

    return suma // Devuelve solo el resultado de lo que se opere
}

console.log(sumar(2, 3))

function esPar(numero) {
    return numero % 2 === 0 // boolean
}

console.log(esPar(4))
console.log(esPar(7))

// Ejecicios

// 1.- Crear una función que reciba un número y devuelva el doble de ese número por consola.
// 2.- Crear una función que reciba dos números y devuelva el mayor por consola.
// 3.- Reutilizar el ejercicio de fizzBuzz usando funciones de tal forma que puedan llamarlo de la siguiente manera. Ej. fizzBuzz(15) -> fizzbuzz

// Ejercicio 01
function doble(numero) {
    return numero * 2
}

console.log(doble(8))
console.log(doble(3))

// Ejercicio 02



// Ejerciccio 03



// 11.- Cadena de texto

// Propiedad .length 

console.log("Hola" .length) // muestra la cantidad de caracteres

// Acceder a caracteres, cada letra tiene una posición (empieza con 0)

let miNombre = 'Uzziel'

console.log(miNombre[0])
console.log(miNombre[1])
console.log(miNombre[2])
console.log(miNombre[3])
console.log(miNombre[4])
console.log(miNombre[5])

// Método importantes de las cadenas de texto

console.log(miNombre.toLowerCase()) // nos muestra en minusculas.
console.log(miNombre.toUpperCase()) // nos muestra en mayusculas.
console.log(miNombre.includes('zi')) // nos indica si tenemos esos caracteres en la palabra.

// Ejercicios:

// 1.- Dado un string, crear una función llamada evaluarTexto que devuelva: "Largo" si tiene más de 10 caracteres y "Corto" si tiene 10 o menos.
// 2.- Dado un string, crear una función llamada invertirTexo que devuelva el texto invertido. Ej. hola -> aloh

// Ejecicio 01
function evaluarTexto(texto) {
    if (texto.length > 10) {
    return "Largo"
    } else {
    return "Corto"
    }
}

console.log(evaluarTexto("FullStack"))
console.log(evaluarTexto("Hola, Desarrollador"))

// Ejerccio 2
function invertirTexo(texto) {
    let invertido = ""
    for (let letra of texto) {
    invertido = letra + invertido
    }
    return invertido
}

console.log(invertirTexo("hola"))

