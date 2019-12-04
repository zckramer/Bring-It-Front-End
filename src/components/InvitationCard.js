const Deact = require('../libs/Deact');
const App = require('../components/App');
const renderApp = require('../index');
const HomePage = require('./HomePage');
const EventDetails = require('./ManageEvent')

function handleClickEvent () {
  
  console.log("INVITATION CARD CLICKED");
  const id = event.target.eventId
  return Deact.render(EventDetails(id), document.querySelector(".home-page-container"))

  // makePage();
  // render ManageEvents 
  

}


function makePage() {
  if (document.querySelector(".main-container-event") != null){
    document.querySelector('.main-container-event').innerHTML = "";

  }

  const pageMade = Deact.create("section", { class: `main-container-event`},[
    Deact.create("div", { class: `my-event`},`my-event`),
    Deact.create("div", { class: `host`},`host`),
    Deact.create("div", { class: `attendees`},`attendees`),
    Deact.create("div", { class: `assignments`},`assignments`)
  ]);

  // const filledPage =populatePage(pageMade);
  
  return Deact.render(pageMade, document.querySelector('.home-page-container'))

}

// function populatePage(pageMade) {

//   document.querySelector('.my-event')

// };

// Deact.render(HomePage(), document.querySelector('.app'));

async function Invitations(){
  const userId = localStorage.getItem("user")
  const response = await Http.getRequest(`http://localhost:3000/users/${userId}/attending`)
  console.log(response)
  document.querySelector('.nav-bar').innerHTML = `${response.user.eventsAttending[0].title}`;

  // myEvents.map(element => {

  //   InvitationCard(element)
  // })
    // InvitationCard(element))
  // InvitationCard(myEvents[0]);

}

function InvitationCard (myEvent) {
 
  console.log("InvitationCard") 
  console.log("myEvent.title: "+ myEvent.title);
  const card = Deact.create("section", { class: `invitation-card`, onclick: handleClickEvent},[ 
    Deact.create("h4", { class: `invitation__name`},`${myEvent.title}<br/>${myEvent.date} <br/>${myEvent.eventId}`) ])
    return Deact.render(card, document.querySelector(".nav-bar"));
};


module.exports = Invitations;