let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxImagem()
}, 5000)

const proxImagem = () => {
    contador++;
    if (contador>3){
        contador = 1
    }

    document.getElementById("radio"+contador).checked = true;
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", () => {
    botao.classList.add("active");

    setTimeout(()=> {
        botao.classList.remove("active");
        document.querySelector("bx").classList.replace("bx-cloud-download", "bx-check-circle")
        document.querySelector(".textoBotao").innerHTML = "Concluído"
    }, 1000) //ms
})