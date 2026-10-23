let numeroActual = 0
let operador = ''
let opernado = ''

// Nota: Consultar un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')

// Nota: Consultar multiples elementos a la vez
const buttons = document.querySelectorAll('.button')
console.log(buttons)

// Nota: Eventos
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        // console.log('click', event.target)

        const buttonText = event.target.textContent

        if ('*-+'.includes(button)) {
            // 02: Accionamos el Operador
            operador = buttonText
            operando = Number(numeroActual)
            numeroActual = '0'
        } else if (buttonText === '=') {
// Todo: Calcular las operaciones en base al número actual y el operando.
        } else if (buttonText === 'C') {
// Todo: Limpiar el operando, operador y el input.
        } else {
            // 01: Se presionó algún número
            numeroActual = Number(numeroActual + buttonText)
        }
        
        inputDisplay.value = numeroActual
    })
})