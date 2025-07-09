const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    
    const valorPor15Min = Number(frm.inValor.value)
    const tempoUso = Number(frm.inTempo.value)

    const blocos = Math.ceil(tempoUso / 15) 
    const valorFinal = blocos * valorPor15Min

    resp.innerText = `Valor a Pagar R$: ${valorFinal.toFixed(2)}`

    e.preventDefault()
})
