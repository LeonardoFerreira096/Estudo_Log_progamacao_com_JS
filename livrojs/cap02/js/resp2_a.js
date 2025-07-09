const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {

    const medicamento = frm.inRemedio.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco * 2 * 0.9
    const valorFinal = Math.floor(promocao)

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${valorFinal.toFixed(2)}`

    e.preventDefault()
})
