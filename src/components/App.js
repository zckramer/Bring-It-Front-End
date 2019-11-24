const Deact = require("../libs/Deact");
const Http = require("../utils/Http");
const UserCard = require('../components/UserCard')
const Users = require('../components/Users')


async function App (isLoggedIn) {
    console.log(isLoggedIn)
    
    if (isLoggedIn === false || isLoggedIn === undefined) {
        return Deact.create("div", {class:"users-area"}, await Users.renderUsers())    
    } else {
        return Deact.create("div", {class:"home-page"}, ["Home PAAAAAAAGE!"])
    }
}



module.exports = App;