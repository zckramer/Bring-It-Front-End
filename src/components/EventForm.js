const Deact = require('../libs/Deact')
const Users = require('../components/Users')
const Http = require('../utils/Http')
const Items = require('./ItemCard')


async function RenderEventForm () {
    return Deact.create("article", {class:"event-form__container"}, [

        
            Deact.create("form", {class:"event-form__info", action: "/addNewEvent", method:"POST"}, [
                Deact.create("input", {class:"input-name", placeholder:"Host Name"}, ""),
                Deact.create("input", {class:"input-date", placeholder:"Date"}, ""),
                Deact.create("input", {class:"input-location", placeholder:"Location"}, ""),
                Deact.create("input", {class:"input-theme", placeholder:"Theme"}, ""),
                Deact.create("input", {class:"input-desc", placeholder:"Description"}, ""),
                Deact.create("br", {}, ""),
                Deact.create("section", {class:"input-friends"}, await Users.renderFriendsCheckbox()),
                Deact.create("div", {class:"input-items"}, [
                    "checkboxes of items to bring",
                    Deact.create("div", {class:"input-items__list"}, await Items.renderItemsCheckbox())
                ]),

                Deact.create ("button", {class:"event-submit"}, "SUBMIT!")
                
            ])
        
    ])
    
}

module.exports = RenderEventForm;