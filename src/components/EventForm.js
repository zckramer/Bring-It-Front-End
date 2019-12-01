const Deact = require('../libs/Deact')
const Users = require('../components/Users')
const Http = require('../utils/Http')



async function RenderEventForm () {
    return Deact.create("article", {class:"event-form__container"}, [

        
            Deact.create("form", {class:"event-form__info"}, [
                Deact.create("input", {class:"input-name", placeholder:"Host Name"}, ""),
                Deact.create("input", {class:"input-date", placeholder:"Date"}, ""),
                Deact.create("input", {class:"input-location", placeholder:"Location"}, ""),
                Deact.create("input", {class:"input-theme", placeholder:"Theme"}, ""),
                Deact.create("input", {class:"input-desc", placeholder:"Description"}, ""),
                Deact.create("br", {}, ""),
                Deact.create("section", {class:"input-friends"}, await Users.renderFriendsCheckbox()),
                Deact.create("p", {class:"input-items"}, [
                    // checkboxes of items to bring
                    "checkboxes of items to bring",
                    Deact.create("input", {type:"checkbox", class:"item-checkbox"}, "item #1")
                ]),
                Deact.create ("button", {class:"event-submit"}, "Submit")
                
                

            ])
        
    ])
    
}

module.exports = RenderEventForm;

/* <article class="event-form__container">
        <h2>Event Form</h2>
        <section class="event-form__info">
            <div class="input-name">Name <input/></div>
            <div class="input-date">Date <input/></div>
            <div class="input-location">Location <input/></div>
            <div class="input-theme">Theme </input></div>
            <div class="input-desc">Description<textarea></textarea></div>
            <hr>
        </section>
    
        
            <h2>Invite the Homies</h2>
            <input type="text" placeholder="Search..">
            <section class="input-friends">
            
            <div class="user-card"><img src="../Images/user1.jpeg" class="user-icon"><span class="user-name">Lacey W</span> </div>
            <div class="user-card"><img src="../Images/user2.jpeg" class="user-icon"><span class="user-name">Ben W</span> </div>
           
            </section>
        
    
        <section class="catagory-container">
            <h2>Add your catagories!</h2> 
            <input/>

            <div class="new-category-icon"><span class="plus-icon">+</span></div>
        NOTES----Create a list of added categories. 
        </section>
    </article> */