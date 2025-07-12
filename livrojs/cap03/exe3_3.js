// // a)Um programa para a empresa ler o salario e tempo que o funcionario trabalha na empresa,
// // sabendo que cada 4 ano o funcionario recebe um acrescimo ed 1% no salario, calcule e informe o
// numero de quadrienios a que o funcionario tem direito e o salario final.

const prompt = require("prompt-sync")()
const salario = Number(prompt("Salario R$: "))
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Math.floor(tempo / 4)
const acrescimo = salario * quadrienios / 100
console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`)

