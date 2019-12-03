  const Deact = require('../libs/Deact')
  const EventForm = require('../components/EventForm')

  async function HomePage (userId) {
    return  (
      Deact.create("section", {class: "main-container"},[
        

        // HOME PAGE
        // Deact.create("div", {class: "my-event"}, "My Event!"),
        // Deact.create("div", {class: "host"}, "Host!"),
        // Deact.create("div", {class: "attendees"}, "Attendees!"),
        // Deact.create("div", {class: "assignments"}, "Assignments") 
        
        //EVENT FORM
        // Deact.create("div", {class: "event-form"}, EventForm())
        await EventForm()

        
     ]))
  }
  
  module.exports = HomePage;