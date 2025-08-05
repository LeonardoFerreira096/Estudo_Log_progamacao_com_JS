const prompt = require("prompt-sync")()
const numero = Number(prompt("Digite um número: "))

// console.log(numero % 2 ? "É Ímpar" : "É Par")

if (numero % 2) {
    console.log("O número é Ímpar!")
} else {
    console.log("O número é Par!")
}
