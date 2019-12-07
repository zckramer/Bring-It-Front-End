const Deact = require('../libs/Deact')
const Users = require('./Users')
const App = require("./App")

function IntroScreen() {

    return (
        Deact.create("section", {class:"button-container"}, [
            Deact.create("button", {class: "submit-button", onclick:handleButtonEvent}, 'Log In Here!')
        ]))


    function handleButtonEvent() {
        document.querySelector('.button-container').innerHTML = ""
    }
}



module.exports = IntroScreen;