const Deact = require('../libs/Deact')
const Users = require('./Users')
const App = require("./App")

async function LogIn() {

    
    
    return (
        Deact.create("div", {class:"content"}, [
            Deact.create("img", 
            {class:"user-card",
             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_efj-o6j-7zgsVCcnbZKHEmyqV5xe-iHLgNnjqUo5hRVdW3Hv&s",
             onclick: renderNewUserForm//add new user form
            }, ""),
            await Users.renderUsers()
        ])
    )
}
function renderNewUserForm(userId) {
    const mainContainer = document.querySelector(".log-in-container");
    mainContainer.innerHTML = "";
    const newUserForm = Deact.create("form", {class:"new-user-form"}, [
        Deact.create("span",{class:"new-user-input__label"}, "New User Name: "),
        Deact.create("input", {class:"new-user-input__name-input", placeholder:"your name..."},"" ),
        Deact.create("span",{class:"new-user-input__label"}, "Avatar Image URL: "),
        Deact.create("input", {class:"new-user-input__image-input", placeholder:"where's your picture?"},"" ),
        Deact.create("button",{type:"button", class:"submit-button", onclick: handleSubmit}, "Submit")
    ])
    Deact.render(newUserForm, mainContainer);
}
function handleSubmit() {
    
}

module.exports = LogIn