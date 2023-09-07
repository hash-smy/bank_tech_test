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
        expect(accountNum.getBalance()).toBe(3000.00)
    })
    it('withdraw 200, then it shows balance 800',()=>{
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(1000);
        accountNum.withdraw(200);
        expect(accountNum.getBalance()).toBe(800.00);
    })
    it('deposit 1000, deposite 2000, withdraw 500 , it showsthe list of transcation',() =>{
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2023-09-05'));
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(1000);
        accountNum.deposit(2000);
        accountNum.withdraw(500);
        const expectedStatement = `date || credit || debit || balance\n05/09/2023 || ||500.00||2500.00\n05/09/2023 || 2000.00||||3000.00\n05/09/2023 || 1000.00||||1000.00`;
        const statement = accountNum.printStatement()
        expect(statement).toBe(expectedStatement)
    });
    it('provide Letter as account num should return Invalid input',() =>{
        const accountNum = new BankAccount('Hello');
        expect(accountNum.getAccountnum()).toBe('Invalid input')
    });
    it('provide Letter as deposit amount should return Invalid input',() =>{
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const accountNum = new BankAccount('001234567');
        accountNum.deposit('Ohno');
        expect(consoleLogSpy).toHaveBeenCalledWith('Invalid deposit input');
        consoleLogSpy.mockRestore();
    });
    it('provide Letter as deposit amount should return Invalid input',() =>{
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(-200);
        expect(consoleLogSpy).toHaveBeenCalledWith('Invalid deposit amount');
        consoleLogSpy.mockRestore();
    });
    it('withdraw amount more than balance shoudl return "Insifficient funds',() =>{
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(500);
        accountNum.withdraw(1000);
        expect(consoleLogSpy).toHaveBeenCalledWith('Insufficient funds');
        consoleLogSpy.mockRestore();
    });
    it('withdraw amount contain letters shoudl return "Invalid withdraw input"',() =>{
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const accountNum = new BankAccount('001234567');
        accountNum.deposit(500);
        accountNum.withdraw('1ooo');
        expect(consoleLogSpy).toHaveBeenCalledWith('Invalid withdraw input');
        consoleLogSpy.mockRestore();
    });
});