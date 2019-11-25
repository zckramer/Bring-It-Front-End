  const Deact = require('../libs/Deact')

function HomePage (userId) {
    return  Deact.create("div", {class: "home-page-container"}, [
        Deact.create("header", {class: "home-page__header"}, ["Header Lamar!"]),
        // Logo Element
        Deact.create("div", {class:"logo"}, ["Logoes Here!"]),
        // Note Element
        Deact.create("div", {class: "home-page__header-note"}, ["NOTE"]),
        // Nav Element
        Deact.create("nav", {class: "home-page__navigation-bar"}, ["nav nav nav"]),
        // Footer Element
        Deact.create("footer", {class: "home-page__footer"}, ["footer footer footer"])
    ])

}
module.exports = HomePage;