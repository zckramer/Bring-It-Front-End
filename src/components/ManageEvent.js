const Deact = require("../libs/Deact")
const Http = require("../utils/Http")

function ManageEvents(eventId) {
    Deact.create("div", {class:"managerContainer"}, [
        Deact.create("div", {class:"my-event"}, `${eventDetails}`),
        Deact.create("div", {class:"host"}, `${hostDetails}` ),
        Deact.create("div", {class:"attendees"}, `${inviteesList}`),
        Deact.create("div", {class:"assignments"}, `${itemsList}`),

])}

function eventDetails(eventId) {

    const myEventDetails = Deact.create("div", {class:"my-event__event-details"},[
        Deact.create("p", {class:"my-event__name"}, "my event name"),
        Deact.create("p", {class:"my-event__date"}, "my event date"),
        Deact.create("p", {class:"my-event__details"}, "details")
    
    ])
    return Deact.render(myEventDetails, document.querySelector(".my-event"))
}

function inviteesList(eventId) {
    const invitees = Deact.create("ul", {class:"attendees__list"}, [
        getEventDetails(),
        Deact.create("li", {class:"attendees__list-item"}, "Attendee #3")
        
    ])
}


async function hostDetails(eventId){
    const response = await Http.getRequest(`http://localhost:3000/users/${eventId.hostId}`)
    
    const host = Deact.create("div", {class:"host__host-details"},[
        Deact.create("li", {class:"host__name"}, response.name),
        Deact.create("li", {class:"host__image"}, response.image)
    ])
} 

async function itemsList(eventId){
    const itemsListResponse = await Http.getRequest(`http://localhost:3000/events/${eventId.items}`);
    
    const itemsContainer = Deact.create("ul", {class:"items__items-details"},"")

    itemsListResponse.map(async item => {
        const userResponse = Http.getRequest(`http://localhost:3000/users/${item.assignedTo}`)
        const itemName = Deact.create("span", {class:"items__list-item"}, item.name)
        const assignedToName = Deact.create("span", {class:"items__list-item"}, userResponse.name) 
        const listItemCard = Deact.create("li", {class:"items__item-card"}, [itemName,assignedToName])

        Deact.render(listItemCard, itemsContainer)
        Deact.render(itemsContainer, document.querySelector(".assignments"))

    })
} 

async function getEventDetails (eventId) {
    const eventResponse = Http.getRequest(`http://localhost:3000/events/${eventId}`)
    const attendeeArray = eventResponse.guestList.map(guest => {
        const guestName = Http.getRequest(`http://localhost:3000/users/${guest.name}`)
        const guestImage = Http.getRequest(`http://localhost:3000/users/${guest.image}`)
        const attendeeListCard = Deact.create("li", {class:"attendee__list-item"}, [
            Deact.create("span", {class:"attendees__list-item-name"}, guestName),
            Deact.create("span", {class:"attendees__list-item-name"}, guestImage)
        ])
        return Deact.render(attendeeListCard,document.querySelector(".attendees__list"));
        
        // return Deact.create("section", { class: `user-card`, name: user.name, value: user._id,}, [
        // Deact.create("h3", { class: `user-card__name`, name: user.name, value: user._id }, user.name),
        // Deact.create(
        //     "img",
        //     { class: `user-card__avatar`, name: user.name, src: user.image, value: user._id },
        //     ""
        // )
        // ])
    })
    // return Deact.create('div', {}, userArray)
}


module.exports = ManageEvents;