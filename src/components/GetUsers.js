Deact = require("../libs/Deact");
Http = require("../utils/Http");

function getUsers(){
    Http.getRequest("http://localhost:3000/users", function(response){

        const users = response.users;

        users.forEach(function(user){
        console.log(user._id);

        })
    }) 

};

module.exports = getUsers();