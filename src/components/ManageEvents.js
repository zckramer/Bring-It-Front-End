const Deact = require("../libs/Deact")
const Http = require("../utils/Http")

async function ManageEvent(eventId) {
    console.log(eventId);
    const response = await Http.getRequest(`http://localhost:3000/events/${eventId}`)
    const event = response.event;
    // console.log(event)


    document.querySelector('.main-container').innerHTML = "";
    return (Deact.create("div", {class:"main-container-event"}, [
       Deact.create("div", {class:"my-event"}, eventDetails(event)),
        Deact.create("div", {class:"host"}, await hostDetails(event.hostId) ),
        // Deact.create("div", {class:"attendees"}, inviteesList(eventId)),
        Deact.create("div", {class:"attendees"},"attendees"),
        // Deact.create("div", {class:"assignments"}, await itemsList(eventId) ),
        Deact.create("div", {class:"assignments"}, "assignments" )
]))}

function eventDetails(event) {

    const myEventDetails = Deact.create("div", {class:"my-event__event-details"},[
        Deact.create("p", {class:"my-event__title"}, `${event.title}`),
        Deact.create("p", {class:"my-event__date"}, `${event.date}`),
        Deact.create("p", {class:"my-event__details"}, "event.description")
    ])
    return myEventDetails  
}

function inviteesList(eventId) {
    const invitees = Deact.create("ul", {class:"attendees__list"}, [
        getEventDetails(),
        Deact.create("li", {class:"attendees__list-item"}, "Attendee #3")
         
    ])
}


async function hostDetails(hostId){
   
    const response = await Http.getRequest(`http://localhost:3000/users/${hostId}`)
    const host = response.user
    
    const Host = Deact.create("div", {class:"host__host-details"},[
        Deact.create("li", {class:"host__name"}, `${host.name}`),
        Deact.create("img", {src: host.image, class:"host__image"}, "")
    ])
    return Host
} 

async function itemsList(eventId){
    const response = await Http.getRequest(`http://localhost:3000/events/${eventId}/items`);
    console.log(response.event.items)
    const itemsArray = response.event.items;
    
    const ItemCards = itemsArray.map(item => {
        // Http.getRequest(`http://localhost:3000/users/${item.assignedTo}`)

        return ( Deact.create("section", {class:"event-item-card"}, [
          Deact.create("div", {class:"event-item-title"}, "Sailor Who"), 
        Deact.create("div", {class:"event-item-assigned"}, "")  
        ]))
    })
    const itemsContainer = Deact.create("ul", {class:"items__items-details"}, ItemCards)
    
    return itemsContainer
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


module.exports = ManageEvent;