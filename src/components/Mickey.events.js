const Deact = require('../libs/Deact')
const Http = require('../utils/Http')
// const UserCard = require('./UserCard')

module.exports = {
    
    async renderMickeyEvents() {
        
        const response = await Http.getRequest(`http://localhost:3000/events`)
             
             const eventsArray = response.events.map(event => {
                // need to find all events Mickey is hosting

                // need to find all events Mickey is attending
                
                 return Deact.create("div", {class:"event-card", id:`${event._id}`}, event)
             })
             return Deact.create('div', {}, eventsArray)
    }
}

