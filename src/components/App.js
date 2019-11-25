const Deact = require("../libs/Deact");
const Http = require("../utils/Http");
const UserCard = require('../components/UserCard')
const Users = require('../components/Users')
const HomePage = require('../components/HomePage')


async function App (isLoggedIn) {

        // DEV -- EDITTING HOME PAGE
        return Deact.create("div", {class:"users-area"}, await HomePage())    

        // USER LOGIN
        // return Deact.create("div", {class:"users-area"}, await Users.renderUsers())    
    }




module.exports = App;