const Deact = require("./libs/deact");
const App = require("./components/App");
const users = require("./components/GetUsers");

Deact.render(App, document.querySelector(".app"));