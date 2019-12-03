const Deact = require("../libs/Deact");
const Http = require("../utils/Http");
const UserCard = require('../components/UserCard')
const Users = require('../components/Users')
const HomePage = require('../components/HomePage')
const NavBar = require('../components/NavBar')
const InvitationCard = require('../components/InvitationCard')

 
function App (isLoggedIn) {

   const  testEvent =  {title:"birthday", date:"January 11, 2020"}
   
   console.log(testEvent);
        // DEV -- EDITTING HOME PAGE
        console.log(document.querySelector(".nav-bar"))
        return Deact.render( InvitationCard(testEvent), document.querySelector(".nav-bar")   
                
        )

        // return Deact.render(await NavBar(), document.querySelector(".home-page-container")   
                
        // )

        // USER LOGIN    
        // return Deact.render(await Users.renderUsers(), document.querySelector(".home-page-container"))    
    }




module.exports = App;