let img = document.querySelector("img")
const QfotosNoBanco = 5
let numAtual = 0

document.querySelector("button").addEventListener('click', () => {
    numAntigo = numAtual
    do {
        numAtual = Math.floor(Math.random() * QfotosNoBanco)
    } while (numAtual == numAntigo)
    
    img.src = "ideias/ideia" + numAtual + ".jpg"
})