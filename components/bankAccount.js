const Transcation = require('./transcation.js')

class BankAccount{
    constructor(accountNum){
        this.accountNum = accountNum;
        this.balance = 0;
        this.transcations = [];
    };

    getAccountnum(){
        if (typeof this.accountNum !== 'number')
            return('Invalid input');
        return this.accountNum;
    }

    deposit(amount){
        if (amount >0){
        this.balance += amount;
        const transcation = new Transcation(amount, this.balance);
        this.transcations.push(transcation);

        }
        if (amount <0){
            console.log("Invalid deposit amount")
            return;
        }else{
            console.log("Invalid deposit input");
        }
    };
    withdraw(amount) {
        if (amount >0 && amount <= this.balance){
        this.balance -= amount;
        const transcation = new Transcation(-amount, this.balance);
        this.transcations.push(transcation);
        }
        if (amount > this.balance){
            console.log("Insufficient funds");
            return;
        }else{
            console.log("Invalid withdraw input");
            return;
        }
    };

    getBalance() {
        return this.balance
    };

    printStatement(){
        let statement = 'date || credit || debit || balance';
        for (const transcation of this.transcations){
            const date = transcation.getDate().toLocaleString('en-GB').split(',')[0];
            let credit =" ";
            let debit = "";
            if (transcation.getAmount() > 0){
                credit = transcation.getAmount();
            }else{
                debit = -transcation.getAmount();
            }
            const balance =transcation.getBalanceAfterTranscation();
            const creditStr = credit.toString();
            const debitStr = debit.toString();
            const balanceStr = balance.toString().padEnd(8);
            statement += `\n${date} || ${creditStr}||${debit}||${balance}`;
            }    
            return statement;
        }
        
    }

module.exports = BankAccount;