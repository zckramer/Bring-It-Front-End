const underTest = require('./Users')

describe('renderUsers', () => {
    test('should create an element for each user in the DB', async () => {
        

        const returnedUserCards = await underTest.renderUsers();
        expect(returnedUserCards).toBeDefined
        // console.log(returnedUserCards)
        // expect()
    })
})