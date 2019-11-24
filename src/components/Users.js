const Deact = require('../libs/Deact')
const Http = require('../utils/Http')
const UserCard = require('./UserCard')

module.exports = {
    
    async renderUsers() {
        function handleClickEvent (event) {
            console.log(event.target.value);
        }
        const response = await Http.getRequest(`http://localhost:3000/users`)
             
             const userArray = response.users.map(user => {
                 console.log(user.name)
                 return Deact.create("div", {class:"user-card", id:`${user._id}`}, UserCard(user))
             })
             return Deact.create('div', {}, userArray)
    }
}

