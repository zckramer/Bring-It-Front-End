const Deact = require("./libs/Deact");
const App = require("./components/App");
const users = require("./components/GetUsers");


const isLoggedIn = false;
 function renderApp() { return Deact.render( App(isLoggedIn), document.querySelector(".app"));}


function userLogIn () {
    isLoggedIn = true;
}

renderApp();


module.exports = userLogIn