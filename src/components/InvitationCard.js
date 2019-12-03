const Deact = require('../libs/Deact');
const App = require('../components/App');
const renderApp = require('../index');
const HomePage = require('./HomePage');
let x = 0;
function handleClickEvent () {
  
 console.log("invitation card clicked");
//  document.querySelector('.main-container').innerHTML = `<p> ${++x} </p>` ;
//document.querySelector('.main-container').innerHTML = "";
  
 
//  document.querySelector( '.host').innerHTML = `<p>host</p>`
  // Deact.create("div", { class: `attendees`},"attendees"),
  // Deact.create("div", { class: `assignments`},"assignments")
function makePage() {
  
  return Deact.create("section", { class: `main-container-event`},[
    Deact.create("div", { class: `my-event`},`my-event`),
    Deact.create("div", { class: `host`},`host`),
    Deact.create("div", { class: `attendees`},`attendees`),
    Deact.create("div", { class: `assignments`},`assignments`)
    
  ]);

}
  Deact.render(makePage(), document.querySelector('.home-page-container'))
// document.querySelector( '.host').innerHTML = `<p>host</p>`;

}

document.querySelector('.nav-bar').innerHTML = "";
Deact.render(HomePage(), document.querySelector('.app'));

function InvitationCard (myEvent) {

  console.log(myEvent.title);
    return Deact.create("section", { class: `invitation-card`, onclick: handleClickEvent},[ 
      Deact.create("h4", { class: `invitation__name`},`${myEvent.title}<br/>${myEvent.date} `) ])
};


module.exports = InvitationCard;