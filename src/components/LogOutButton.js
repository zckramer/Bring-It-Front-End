const Deact = require("../libs/Deact")
const renderApp = require("../index")
const IntroScreen = require("./IntroScreen")
const Users = require("./Users")

function renderLogOutButton() {
    console.log("running renderLogOutButton...")
    const button = Deact.create("button", {class:"log-out-button", onclick: logOut}, "Log Out");
    return Deact.render(button, document.querySelector(".home-page__header"))

}

async function logOut () {
    console.log('logging out...')
    // Clearing Page
    document.querySelector(".main-container").innerHTML = "";
    document.querySelector(".new-event").classList.remove("show")
    document.querySelector(".nav-bar").innerHTML = "";
    const logoutButton = document.querySelector(".log-out-button")
    logoutButton.parentNode.removeChild(logoutButton)
    // logout
    localStorage.setItem("user", null)
   
    location.reload();

}
module.exports = renderLogOutButton