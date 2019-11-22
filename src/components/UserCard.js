const Deact = require('../libs/Deact')

function UserCard (user) {
    return Deact.create("section", { class: `user-card` }, [
      Deact.create("h3", { class: `user-card__name`, value: user._id }, user.name),
      Deact.create(
        "img",
        { class: `user-card__avatar`, src: user.image },
        ""
      )
    ]);
  }
  module.exports = UserCard;