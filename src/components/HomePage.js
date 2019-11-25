  const Deact = require('../libs/Deact')

  async function HomePage (userId) {
    return  (
      Deact.create("section", {class: "main-container"},[
        
        Deact.create("div", {class: "my-event"}, "My Event!"),
        Deact.create("div", {class: "host"}, "Host!"),
        Deact.create("div", {class: "attendees"}, "Attendees!"),
        Deact.create("div", {class: "assignments"}, "Assignments")    

     ]))
  }
  
  module.exports = HomePage;