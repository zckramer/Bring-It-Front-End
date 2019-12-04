const Deact = require('../libs/Deact');
const App = require('../components/App');
const renderApp = require('../index');
const HomePage = require('./HomePage');

function handleClickEvent () {
  
  console.log("INVITATION CARD CLICKED");
  makePage();
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
  
  return Deact.render(pageMade, document.querySelector('.home-page-container'))

}



// Deact.render(HomePage(), document.querySelector('.app'));

function Invitations(myEvents){
  document.querySelector('.nav-bar').innerHTML = "";

  console.log("Invitations")
  // myEvents.map(element => console.log(element))
  myEvents.map(element => {

    InvitationCard(element)
  })
    // InvitationCard(element))
  // InvitationCard(myEvents[0]);

}

function InvitationCard (myEvent) {
 
  console.log("InvitationCard") 
  console.log("myEvent.title: "+ myEvent.title);
  const card = Deact.create("section", { class: `invitation-card`, onclick: handleClickEvent},[ 
    Deact.create("h4", { class: `invitation__name`},`${myEvent.title}<br/>${myEvent.date} `) ])
    return Deact.render(card, document.querySelector(".nav-bar"));
};


module.exports = Invitations;