const Deact = require('../libs/Deact');
const App = require('../components/App');
const renderApp = require('../index');
const HomePage = require('./HomePage')

document.querySelector('.nav-bar').innerHTML = "";
Deact.render(HomePage(), document.querySelector('.app'));

function InvitationCard (myEvent) {
  console.log(myEvent.title);
    return Deact.create("section", { class: `invitation-card`,}, [
      Deact.create("h3", { class: `invitation__name`},`${myEvent.title}`)
      
    ]);
  }

  module.exports = InvitationCard;