const Deact = require('../libs/Deact')
const Http = require('../utils/Http')


module.exports = {
    async renderItemsCheckbox() {

        const response = await Http.getRequest(`http://localhost:3000/items`)
            
        const itemsArray = response.items.map(item => {
            return (
                Deact.create("span", {class:"item-label"},[`${item.itemName}`, Deact.create("input", {type:"checkbox", class:"item-checkbox", name:"items", value: `${item._id}`}, "")])
            )
        })
                
        return itemsArray
    }
}