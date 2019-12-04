const Deact = require("../libs/Deact");
const Http = require("../utils/Http");
const UserCard = require('../components/UserCard')
const Users = require('../components/Users')
const HomePage = require('../components/HomePage')
const EventForm = require('../components/EventForm')

async function App (isLoggedIn) {
        // DEV -- EDITTING HOME PAGE
        return Deact.render( await HomePage(), document.querySelector(".home-page-container"))            


        // USER LOGIN    
        // return Deact.render(await Users.renderUsers(), document.querySelector(".home-page-container"))    
    }




module.exports = App;