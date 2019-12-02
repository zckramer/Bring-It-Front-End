const Deact = require('../libs/Deact')

async function NavBar (userId) {
  return  (
    Deact.create("nav", {class: "nav-bar"}, [

    ])) 
} 

module.exports = NavBar;