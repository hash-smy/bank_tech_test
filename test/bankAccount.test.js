const BankAccount = require('../components/bankAccount.js');

describe ('BankAccount',() => {
    it('create bank account with 0 balance',()=>{
        const accountNum = new BankAccount('001234567');
        expect(accountNum.getBalance()).toBe(0);
    });
    it('deposit 2000 then deposite 1000, then it shows balance 3000',() =>{
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(2000);
        accountNum.deposit(1000);
        expect(accountNum.getBalance()).toBe(3000)
    })
    it('withdraw 200, then it shows balance 800',()=>{
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(1000);
        accountNum.withdraw(200);
        expect(accountNum.getBalance()).toBe(800);
    })
    it('deposit 1000, deposite 2000, withdraw 500 , it showsthe list of transcation',() =>{
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2023-09-05'));
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(1000);
        accountNum.deposit(2000);
        accountNum.withdraw(500);
        const expectedStatement = `date || credit || debit || balance\n05/09/2023 || 1000||||1000\n05/09/2023 || 2000||||3000\n05/09/2023 ||  ||500||2500`;
        const statement = accountNum.printStatement()
        expect(statement).toBe(expectedStatement)
    });
});