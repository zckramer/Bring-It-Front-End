const Deact = require('../libs/Deact')
const App = require('../components/App')
const renderApp = require('../index')
const HomePage = require('./HomePage')


async function handleClickEvent (event) {
  
  // document.querySelector('.app')
  const userId = event.target.attributes.value;
  const userName = event.target
  console.log(event.target.attributes.value);
  console.log(event.target.attributes.name);


  document.querySelector('.app').innerHTML = "";
  Deact.render(HomePage(), document.querySelector('.app'));
  
  
  // document.querySelector('.app').append(`Welcome, ${userId}`);

}
function UserCard (user) {
    return Deact.create("section", { class: `user-card`, name: user.name, value: user._id, onclick: handleClickEvent }, [
      Deact.create("h3", { class: `user-card__name`, name: user.name, value: user._id }, user.name),
      Deact.create(
        "img",
        { class: `user-card__avatar`, name: user.name, src: user.image, value: user._id },
        ""
      )
    ]);
  }
module.exports = UserCard;