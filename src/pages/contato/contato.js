var selection = document.querySelector("#selectContact");
var email = document.querySelector(".e-mail");

const addContact = (obj1) => {
    obj1.classList.remove("hide");
}

const removeContact = (obj1) => {
    obj1.classList.add("hide");
}

const atualiza = () => {
    switch(selection.selectedIndex){
        case 0:
            addContact(email);
            break;
        case 1:
            removeContact(email);
            break;
        case 2:
            removeContact(email);
            break;
    }
}

selection.addEventListener("change", () => {
    atualiza();
})

