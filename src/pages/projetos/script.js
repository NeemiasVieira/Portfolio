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
    2:
    {
        "linkProjeto": "https://neemiasvieira.github.io/Fullture-Flix/",
        "linkRepositorio": "https://github.com/NeemiasVieira/Fullture-Flix",
    },
    3:
    {
        "linkProjeto": "https://neemiasvieira.github.io/Exercicios-ProcessoSeletivo/Exercicios/Exercicio%203%20em%20Js/Exercicio3.html",
        "linkRepositorio": "https://github.com/NeemiasVieira/Exercicios-ProcessoSeletivo/tree/main/Exercicios/Exercicio%203%20em%20Js"
    },
    4:
    {
        "linkProjeto": "https://neemiasvieira.github.io/Calculadora-de-Numeros-Complexos/NumerosComplexos1.html",
        "linkRepositorio": "https://github.com/NeemiasVieira/Calculadora-de-Numeros-Complexos"
    },
    5:
    {
        "linkProjeto": "http://172.212.98.90:3000",
        "linkRepositorio": "https://github.com/NeemiasVieira/SistemaDeMonitoramentoDoSolo"
    },
    6:
    {
        "linkProjeto": "https://neemiasvieira.github.io/to-do-list-fullstack/",
        "linkRepositorio": "https://github.com/NeemiasVieira/to-do-list-fullstack"
    },
    7:
    {
        "linkProjeto": "https://neemiasvieira.github.io/InglesComGabi/",
        "linkRepositorio": "https://github.com/NeemiasVieira/InglesComGabi"
    },
    8:
    {
        "linkProjeto": "https://neemiasvieira.github.io/DriveExperience/",
        "linkRepositorio": "https://github.com/NeemiasVieira/API-Driver-Experience"
    }
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
    modalButtonRepository.removeEventListener("click", openRepository);
    
}
const openRepository = () => {
    window.open(lista[id].linkRepositorio, '_blank');
    modalButtonProject.removeEventListener("click",openProject);    
}

const toggleModal = () => {
    modal.classList.toggle("hide");
    sombra.classList.toggle("hide");
    if (!modal.classList.contains("hide") && !sombra.classList.contains("hide")){      
        modalButtonProject.addEventListener("click", openProject);
        modalButtonRepository.addEventListener("click", openRepository);
}
}

[closeModalButton, sombra].forEach((e) => {
    e.addEventListener("click", () => toggleModal())
    modalButtonProject.removeEventListener("click",openProject);
    modalButtonRepository.removeEventListener("click", openRepository);
});



for (i = 0; i < buttonViewProject.length; i++){     
    buttonViewProject[i].addEventListener("click", (e) => {
        toggleModal()
        id = e.target.id;
    })   
}