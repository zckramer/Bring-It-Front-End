const Deact = require("../libs/Deact")

function renderLogOutButton() {
    const button = Deact.create("button", {class:"log-out-button"}, "Log Out");
    return Deact.render(button, document.querySelector(".nav-bar"))

}
function logOut () {
    document.querySelector(".main-container").innerHTML = "";
    
}