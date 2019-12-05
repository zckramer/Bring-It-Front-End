const Deact = require('../libs/Deact')
const Users = require('./Users')

async function LogIn() {

    
    
    return (
        Deact.create("div", {class:"content"}, [
            Deact.create("img", 
            {class:"user-card",
             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_efj-o6j-7zgsVCcnbZKHEmyqV5xe-iHLgNnjqUo5hRVdW3Hv&s",
             onclick: ""//add new user form
            }, ""),
            await Users.renderUsers()
        ])
    )
}

module.exports = LogIn