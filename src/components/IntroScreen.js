const Deact = require('../libs/Deact')

function handleButtonEvent() {
    document.querySelector('.button-container').innerHTML = ""
}

function IntroScreen() {
    
    return Deact.create("section", {class:"button-container"}, [
            Deact.create("button", {class: "submit-button", onclick: handleButtonEvent}, 'Log In Here!')
        ])


}

module.exports = IntroScreen;