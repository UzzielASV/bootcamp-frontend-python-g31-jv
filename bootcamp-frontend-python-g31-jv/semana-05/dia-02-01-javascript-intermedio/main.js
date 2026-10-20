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

// Ejemplo: PUSH -> Insertar nuevos elementos en un arreglo al final.

const listDeNombres = ['Uzziel', 'Lucyana', 'Nikole']

console.log(listDeNombres)

listDeNombres.push('Dayana')
listDeNombres.push('Familia')

console.log(listDeNombres)

// Ejemplo: POP -> Remover elementos del final de un arreglo.

listDeNombres.pop()
listDeNombres.pop()

console.log(listDeNombres)

// Ejemplo: SPLICE -> Insertar un elemento en una posición determinada.

listDeNombres.splice(1, 0, 'Hijas')  //Nota: Posición insertada, cantidad eliminada, añadida
listDeNombres.splice(0, 0, 'Familia')

console.log(listDeNombres)

// Ejemplo: SPLICR -> Eliminar un elemento en una posisción determinada.

listDeNombres.splice(0,1)

console.log(listDeNombres)

// Ejemplo: LENGTH -> Obtener el tamaño de nuestro arrreglo.

console.log(listDeNombres.length) // Solucion: 4
console.log('Uzziel'.length) // Solucion: 6

// Ejemplo: Obtener el último elemento del arreglo.

console.log(listDeNombres[3-1]) // Solucion: Lucyana
console.log(listDeNombres[listDeNombres.length - 1]) // Solucion: Nikole
console.log(listDeNombres.at(0)) // Solucion: Uzziel
console.log(listDeNombres.at(-1)) // Solucion: Nikole
console.log(listDeNombres.at(-2)) // Solucion: Lucyana

// Todo: Otras funciones -> Investigar la función slice

// Teoria: Mètodos de arreglos -> includes, filter, map, sort, foreach, reduce

// Ejemplo: INCLUDE -> Nos indica sie l valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean (true o false).

const lenguajes = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(lenguajes.includes('python')) // Solucion: true
console.log(lenguajes.includes('cobol')) // Solucion: false

// Ejemplo: FILTER -> Nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuenve un nuevo arreglo con lo que encontro.

const resultado = lenguajes.filter(function (item) {
    // return item === 'java'
    // return item === 'python'
    // return item.includes('c') || item.includes('C')
    return item.toLowerCase().includes('c')
})

console.log(resultado)

// Ejemplo: MAP -> Evalua un arreglo, lo modifica y hay que pasarle una función. Nos devuelve un arreglo modificado. Siempre devuelve un nuevo arreglo.

console.log(lenguajes)

const nombreConTituloEspecial = lenguajes.map(function(lenguaje){ // Nota: Lógica para evaluar y modificar el arreglo.
    // return 'hola'
    return '*' + lenguaje + '*' 
})

console.log(nombreConTituloEspecial)

// Ejemplo: SORT -> Nos ayuda a ordenar un arreglo de elementos. Muta (cambia) el arreglo original. User toSorted() en lugar de sort como recomendación.

// const ordenandoLenguajes = lenguajes.sort() // Nota: Sort muta (cambia) el arreglo original
    const ordenandoLenguajes = lenguajes.toSorted()

console.log(ordenandoLenguajes)
console.log(lenguajes)

// Ejemplo: FOREACH -> Nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

for (let index = 0; index < 10; index++) {
    console.log(index)
}

const miArreglo = []

lenguajes.forEach(function(lenguaje){
    console.log('#', lenguaje)
    miArreglo.push('El mejor: ' + lenguaje)
})

console.log(miArreglo)

// Ejemplo: REDUCE -> Nos auda a acumular (sumar) los valores de un arreglo.

const numeros = [3, 40, 100, 7, 50]

// Nota: Usando FOR

let sumatoria = 0 // Nota: Acumulador

for (let i = 0; i < numeros.length; i++) {
    sumatoria = sumatoria + numeros[i]
}

console.log(sumatoria)

// Nota: Usando REDUCE

const sumatoriaConReduce = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual
}, 0)

console.log(sumatoriaConReduce)

// Ejemplo: OBJETOS -> Una forma de guardar información en pares de clave: valor. Un objeto sirve para agrupar datos relacionados en un solo lugar.

/*
    {
        KEY: VALUE,
        KEY2: VALUE2,
        KEY3: VALUE3
    }
*/

const miObjetoVacio = {}

console.log(miObjetoVacio)

const persona = {
    nombre: 'Uzziel',
    edad: 45,
    esProgramador: true,
    'mi color favorito': 'azul',
    coloresFavoritos: ['naranja', 'negro', 'blanco']

}

const persona2 = {
    nombre: 'Adolfo',
    edad: 85,
    esProgramador: false,
}

// Ejemplo: Leer los campos de un objeto (notación de puntos y de corchetes).

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona2.edad)
console.log(persona.estadoCivil)
console.log(persona.coloresFavoritos)
console.log(persona.coloresFavoritos[0])
console.log(persona["mi color favorito"])

// Ejemplo: Eliminar las propiedades de un objeto.

delete persona2.edad
persona2.esProgramador = undefined

console.log(persona2)

// Ejemplo: Insertar una nueva propiedad a un objeto.

persona.platilloFavorito = 'Aji de Gallina'
persona['juegos favoritos'] = ['WOW', 'Diablo', 'StarCraft']

console.log(persona)