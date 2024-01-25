// var selection = document.querySelector("#selectContact");
// var email = document.querySelector(".e-mail");
// var whatsapp = document.querySelector(".whatsapp");
// const telefone = document.querySelector(".telefone");
const whatsappFormulario = document.querySelector(".whatsappFormulario");

// const addContact = (obj1) => {
//     obj1.classList.remove("hide");
// }

// const removeContact = (obj1) => {
//     obj1.classList.add("hide");
// }

// const atualiza = () => {
//     switch(selection.selectedIndex){
//         case 0:
//             addContact(email);
//             removeContact(whatsapp);
//             removeContact(telefone);
//             break;
//         case 1:
//             removeContact(email);
//             addContact(whatsapp);
//             removeContact(telefone);
//             break;
//         case 2:
//             removeContact(email);
//             removeContact(whatsapp);
//             addContact(telefone);
//             break;
//     }
// }

// selection.addEventListener("change", () => {
//     atualiza();
// })

// WhatsApp:

whatsappFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    var mensagem = document.querySelector(".textareaWhatsapp").value;
    const baselink = "https://wa.me/5513996020483?text="; 
    mensagem = mensagem.split(" ");
    var mensagemTraduzida = "";    
    for (var i = 0; i < mensagem.length; i++){
        if(i != mensagem.length-1){     //Não permite adicionar espaço depois da última palavra da mensagem
            mensagemTraduzida = mensagemTraduzida + mensagem[i] + "%20";
        }
        else{
            mensagemTraduzida = mensagemTraduzida + mensagem[i];
        }
    }

    window.open(baselink + mensagemTraduzida, "_blank")
    document.querySelector(".textareaWhatsapp").value = "";
})

const enterclick = (e) => {
    if(e.key ==="Enter"){
        var button = document.querySelector(".buttonSendWhatsapp");
        button.click();
    }
}

whatsappFormulario.addEventListener("keypress", enterclick);

