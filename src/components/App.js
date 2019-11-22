const Deact = require("../libs/Deact");
const Http = require("../utils/Http");
const UserCard = require('../components/UserCard')
const Users = require('../components/Users')
// Users = require("./GetUsers");

 async function App () {
    return Deact.create("div", {class:"users-area"}, await Users.renderUsers())    

}
module.exports = App;