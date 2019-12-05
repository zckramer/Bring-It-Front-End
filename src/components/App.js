const Deact = require("../libs/Deact");
const Http = require("../utils/Http");
const UserCard = require('../components/UserCard')
const Users = require('../components/Users')
const HomePage = require('../components/HomePage')
const NavBar = require('../components/NavBar')
const Invitations = require('../components/InvitationCard')
const LogIn = require('../components/LogIn')
const RenderForm = require('../components/EventForm')
 


document.querySelector(".new-event").addEventListener('click', renderEventForm)

async function renderEventForm() {
    Deact.render(await RenderForm(), document.querySelector('.main-container') )
}

async function App (itemToRender) {

    switch(itemToRender){

        case "LogIn":
            Deact.render(await LogIn(), document.querySelector(".home-page-container") ) 
        break;

        case "HomePage":
            Deact.render(await HomePage(), document.querySelector(".home-page-container"))            
        break;

        case "NavBar":
            Deact.render(await  NavBar(), document.querySelector(".home-page-container"))
        break;

        default:
            console.log("App Switch Failed");
    };

    // call log in to get user "_id":"5ddadb0a374676197cb2102a"

    // query API for user Events

    // populate navbar with Invited and Hosted events

    Deact.render(Invitations(testEvents), document.querySelector(".nav-bar"))

//    console.log(testEvents);
        // DEV -- EDITTING HOME PAGE
        // return Deact.render( await HomePage(), document.querySelector(".home-page-container"))            

        // return Deact.render(await NavBar(), document.querySelector(".home-page-container")   
                
        // )

        // DEV --- USER LOGIN    

    return Deact.render(await InvitationCard(), document.querySelector(".home-page-container") )  
    }




module.exports = App;