const Deact = require("./libs/deact");
const App = require("./components/App");
const users = require("./components/GetUsers");


async function renderApp() { return Deact.render(await App(), document.querySelector(".app"));}

renderApp();
