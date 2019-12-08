const Deact = require('../libs/Deact');
const App = require('../components/App');
const renderApp = require('../index');
const HomePage = require('./HomePage');
const Http = require('../utils/Http');
const ManageEvent = require('./ManageEvents')

async function handleClickEvent(e) {
  const eventId = e.target.id;
   Deact.render(await ManageEvent(eventId), document.querySelector('.main-container'));


}
function makePage(e) {
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

async function Invitations(){
  Deact.render(await renderInvitations(), document.querySelector('.my-events-container'), );
  }
  
 async function renderInvitations () {
  const userId = localStorage.getItem("user")
  const response = await Http.getRequest(`http://localhost:3000/users/${userId}/attending`)
  // console.log(response.user.eventsAttending)

  const eventArray = response.user.eventsAttending.map(event => {
      return Deact.create("section", { class: `attending-card`, onclick:handleClickEvent, id: `${event._id}`},[Deact.create("h4", { class: `attending-title`, id: `${event._id}`},`${event.title}`)])})
  document.querySelector('.my-events-container').innerHTML = ""
  return Deact.create("section", { class: `attending-card-container`}, eventArray)  
};

module.exports = Invitations;