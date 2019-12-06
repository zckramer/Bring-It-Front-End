const Deact = require("./libs/Deact");
const App = require("./components/App");
const users = require("./components/GetUsers");


 async function renderApp(RenderThis) { return Deact.render( await App(RenderThis), document.querySelector(".app"));}

 localStorage.setItem("user", null)

if (!localStorage.getItem("user") === null) {
    // console.log(localStorage.getItem("user"))
    // console.log("HomePage")
    
      renderApp("HomePage");  
    
} else {
    // console.log(localStorage.getItem("user"))

    renderApp("LogIn");
    // console.log("LogIn")
}
