const Deact = require('../libs/Deact')
const Http = require('../utils/Http')
const UserCard = require('./UserCard')

module.exports = {
    
    async renderUsers() { // test is going to call getRequest
        
        const response = await Http.getRequest(`http://localhost:3000/users`)
             
             const userArray = response.users.map(user => {
                //  console.log(user.name)
                 return Deact.create("div", {class:"user-card", id:`${user._id}`}, UserCard(user))
             })
             return Deact.create('div', {}, userArray)
    },
    
    async renderFriendsCheckbox() {

        const response = await Http.getRequest(`http://localhost:3000/users`)
             
        const userArray = response.users.map(user => {
            return Deact.create("div", {class:"user-card"}, [
                Deact.create("input", { type: "checkbox", class:"user-checkbox", name:"guestList", value:`${user._id}`}, ""),
                Deact.create("span", {class:"user-name"}, `${user.name}`),
                Deact.create(
                    "img",
                    { class: `user-icon`, name: user.name, src: user.image, value: user._id },
                    ""
                  ) ]
                    
                ) 
            })
                
        return userArray
    }
}
