const Deact = require('../libs/Deact')
const App = require('../components/App')

function handleClickEvent (event) {
  // document.querySelector('.app')
  console.log(event.target.attributes.value)
}
function UserCard (user) {
    return Deact.create("section", { class: `user-card`, value: user._id, onclick: handleClickEvent }, [
      Deact.create("h3", { class: `user-card__name`, value: user._id }, user.name),
      Deact.create(
        "img",
        { class: `user-card__avatar`, src: user.image, value: user._id },
        ""
      )
    ]);
  }
module.exports = UserCard;