const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    

    const cProduto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const preco3Produto = 3  
    const total = (preco * 2) + preco3Produto  

    resp1.innerText = `${cProduto} - Promoção: Leve 3 por R$ ${total.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$ ${preco3Produto.toFixed(2)}`

    e.preventDefault()
})
