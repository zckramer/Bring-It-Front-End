const Deact = require('../libs/Deact')
const Users = require('./Users')
const App = require("./App")

async function LogIn() {

    
    
    return (
        Deact.create("section", {class:"main-container"}, [
            await Users.renderUsers()
        ])
    )
}
// function renderNewUserForm(userId) {
//     const mainContainer = document.querySelector(".log-in-container");
//     mainContainer.innerHTML = "";
//     const newUserForm = Deact.create("form", {class:"new-user-form"}, [
//         Deact.create("span",{class:"new-user-input__label"}, "New User Name: "),
//         Deact.create("input", {class:"new-user-input__name-input", placeholder:"your name..."},"" ),
//         Deact.create("span",{class:"new-user-input__label"}, "Avatar Image URL: "),
//         Deact.create("input", {class:"new-user-input__image-input", placeholder:"where's your picture?"},"" ),
//         Deact.create("button",{type:"button", class:"submit-button", onclick: handleSubmit}, "Submit")
//     ])
//     Deact.render(newUserForm, mainContainer);
// }
// function handleSubmit() {
    
// }

module.exports = LogIn