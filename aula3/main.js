import {
    somar,
    subtrair,
    mult,
    div
} from './operacao.js'

calc()


function calc() {
    let operador = prompt('escolha o operador ( +, -, * ou / ): ');

    let numero1 = parseFloat(prompt('primeiro numero: '));
    let numero2 = parseFloat(prompt('segundo numero: '));

    if (operador === '+') {
        alert('resultado da soma: ' + somar(numero1, numero2))
        calc()
    } else if (operador === '-') {
        alert('resultado da subtração: ' + subtrair(numero1, numero2))
        calc()
    } else if (operador === '*') {
        alert('resultado da multplicação: ' + mult(numero1, numero2))
        calc()
    } else if (operador === '/') {
        alert('resultado da divisão: ' + div(numero1, numero2))
        calc()
    }

}