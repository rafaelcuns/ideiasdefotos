let img = document.querySelector("img")

document.querySelector("button").addEventListener('click', () => {
    QfotosNoBanco = 5
    img.src = "ideias/ideia" + Math.floor(Math.random() * QfotosNoBanco) + ".jpg"
    console.log(img.src)
})