const lista = {
    0: 
    {
        "linkProjeto": "https://neemiasvieira.github.io/To-Do-List-Js/index.html",
        "linkRepositorio": "https://github.com/NeemiasVieira/To-Do-List-Js",
    },
    1:
    {
        "linkProjeto": "https://neemiasvieira.github.io/Loja-Pops-HTML-e-CSS/index.html",
        "linkRepositorio": "https://github.com/NeemiasVieira/Loja-Pops-HTML-e-CSS",
    },
}

const closeModalButton = document.querySelector(".closeButton");
const modal = document.querySelector("#modal");
const sombra = document.querySelector("#sombra");
const modalButtonProject = document.querySelector(".modalButton1");
const modalButtonRepository = document.querySelector(".modalButton2");
var buttonViewProject = document.getElementsByClassName("projetoButton");
var id = -1;

const openProject = () => {
    window.open(lista[id].linkProjeto, '_blank');    
    
}
const openRepository = () => {
    window.open(lista[id].linkRepositorio, '_blank');    
}

const toggleModal = () => {
    modal.classList.toggle("hide");
    sombra.classList.toggle("hide");
    if (!modal.classList.contains("hide") && !sombra.classList.contains("hide")){      
        modalButtonProject.addEventListener("click", () => openProject(), {once: true});
        modalButtonRepository.addEventListener("click",() => openRepository(), {once: true});
}
}

[closeModalButton, sombra].forEach((e) => {
    e.addEventListener("click", () => toggleModal())
});



for (i = 0; i < buttonViewProject.length; i++){     
    buttonViewProject[i].addEventListener("click", (e) => {
        toggleModal()
        id = e.target.id;
    })   
}