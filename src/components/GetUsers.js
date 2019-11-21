Deact = require("../libs/Deact");
Http = require("../utils/Http");

async function getUsers(){
    const userReturned =  Http.getRequest("http://localhost:3000/users", function(response){

        const users = response.users;

        users.forEach(function(user){
        console.log("what the fuck is wrong with " + user.name);


        })
        console.log("first print " + users)
        return users;
    }) 

    console.log("second print: " + userReturned)

};

module.exports = getUsers();