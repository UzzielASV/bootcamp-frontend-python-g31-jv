// Nota: console.log() / node main.js / node --watch main.js

// TODO: Repasar las funciones
// EJERCICIOS: Funciones JavaScript
// TEORIA: Una función reutiliza código
// IMPORTANTE: Validar los datos
// EJEMPLO: Función para sumar
// SOLUCION: Aplicar la función
// NOTA: El resultado será 8
// RECORDATORIO: Conceptos para repasar

// Recordatorio: Tipos de Datos Primitivos -> number, string, boolean, null, undefined, bigInt, symbol

// Recordatorio: Tipos de Datos No Primitivos -> Arrays (arreglos), Onjects (objetos), Function, etc...

// Teoria: Arrays (arreglos) -> Un arreglo puede contener elementos de cualquier tipo: cadena, números, booleans, null, arrays, objetos, etc...

// Ejemplo

const arregloVacio = []
const listaDeNumeros = [25, 36, 89, -99, 15.60]
const listaDeValores = [1, 2, 3, 'Uzziel', 'Solís', 'Código', true, null, undefined]

console.log(arregloVacio)
console.log(listaDeNumeros)
console.log(listaDeValores)

// Ejemplo: Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // Solucion: 1
console.log(listaDeValores[3]) // Solucion: Uzziel
console.log(listaDeValores[3] + ' ' + listaDeValores[4]) // Solucion: Uzziel Solís
console.log(listaDeValores[5]) // Solucion: Código
console.log(listaDeValores[99]) // Solucion: undefined

// Ejemplo: Escritura en un arreglo

listaDeValores[2] = 'Desarrollador'
listaDeValores[7] = 1981

console.log(listaDeValores)

Object.freeze(listaDeValores)
listaDeValores[8] = 'Hola a todos'

console.log(listaDeValores)

// Ejemplo: Insertar nuevos elementos en un arreglo al final (push)

const listDeNombres = ['Uzziel', 'Lucyana', 'Nikole']

console.log(listDeNombres)

listDeNombres.push('Dayana')
listDeNombres.push('Familia')

console.log(listDeNombres)

// Ejemplo: Remover elementos del final de un arreglo (pop)

listDeNombres.pop()
listDeNombres.pop()

console.log(listDeNombres)

// Ejemplo: Insertar un elemento en una posición determinada (splice)

listDeNombres.splice(1, 0, 'Hijas')  //Nota: Posición insertada, cantidad eliminada, añadida
listDeNombres.splice(0, 0, 'Familia')

console.log(listDeNombres)

// Ejemplo: Eliminar un elemento en una posisción determinada (splice)

listDeNombres.splice(0,1)

console.log(listDeNombres)

// Ejemplo: 