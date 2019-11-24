const Deact = require('../libs/Deact')

function HomePage (userId) {
    return  Deact.create("div", {class: "home-page-container"}, [
            Deact.create("header", {class: "home-page__header"}, [
                "Welcome, fucka!"
            ])
        ])

}
module.exports = HomePage;