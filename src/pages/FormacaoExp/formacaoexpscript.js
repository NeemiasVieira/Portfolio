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