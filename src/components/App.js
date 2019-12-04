const Deact = require("../libs/Deact");
const Http = require("../utils/Http");
const UserCard = require('../components/UserCard')
const Users = require('../components/Users')
const HomePage = require('../components/HomePage')
const NavBar = require('../components/NavBar')
const Invitations = require('../components/InvitationCard')

 
function App (isLoggedIn) {

   const  testEvents =  [{title:"Birthday", date:"January 11, 2020"},
                        {title:"Slumber", date:"Mardh 11, 2020"},
                        {title:"Holiday", date:"Dec. 11, 2020"}
                        ]
   
   console.log(testEvents);
        // DEV -- EDITTING HOME PAGE
        console.log(document.querySelector(".nav-bar"))
        return Deact.render( Invitations(testEvents), document.querySelector(".nav-bar")   
                
        )

        // return Deact.render(await NavBar(), document.querySelector(".home-page-container")   
                
        // )

        // USER LOGIN    
        // return Deact.render(await Users.renderUsers(), document.querySelector(".home-page-container"))    
    }




module.exports = App;