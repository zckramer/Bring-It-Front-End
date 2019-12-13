const Deact = require("./libs/Deact");
const App = require("./components/App");

 async function renderApp(RenderThis) { Deact.render( await App(RenderThis), document.querySelector(".app"))}

//  Login Reset
//  localStorage.setItem("user", null)

if (!localStorage.getItem("user") === null) {
    // console.log(localStorage.getItem("user"))
    // console.log("HomePage")
    
    //   renderApp("HomePage");  
    
} else {
    // console.log(localStorage.getItem("user"))


    renderApp("IntroScreen")
    // .then renderApp("LogIn");

}
