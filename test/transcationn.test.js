const Transcation = require('../components/transcation')

describe ('Transcation', ()=>{
    it('when create transcation with amount should update the balance ',() =>{
        const transaction= new Transcation(500, 500)
        expect(transaction.getAmount()).toBe(500.00);
        expect(transaction.getBalanceAfterTranscation()).toBe(500.00);
    })
    it('should return the formatted date as expected',() =>{
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2023-09-05'));
        const transaction = new Transcation(500,500);
        expect(transaction.getDate()).toBe('05/09/2023')
    })
})