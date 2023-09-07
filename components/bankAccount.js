const Transcation = require('./transaction.js')

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
        console.log("Deposit sucess!");
        return

        }
        if (amount <0){
            console.log("Invalid deposit amount")
            return;
        }else{
            console.log("Invalid deposit input")
            return;
        }
    };
    withdraw(amount) {
        if (amount >0 && amount <= this.balance){
        this.balance -= amount;
        const transcation = new Transcation(-amount, this.balance);
        this.transcations.push(transcation);
        console.log("Withdrawal success!");
        return;
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
        const reversedTransactions = this.transcations.reverse();
        for (const transcation of reversedTransactions){
            const date = transcation.getDate().toLocaleString('en-GB').split(',')[0];
            let credit ="";
            let debit = "";
            if (transcation.getAmount() > 0){
                credit = transcation.getAmount().toFixed(2);
            }else{
                debit = Math.abs(transcation.getAmount()).toFixed(2);
            }
            const balance =transcation.getBalanceAfterTranscation().toFixed(2);
            const creditStr = credit.toString();
            const debitStr = debit.toString()
            const balanceStr = balance.toString();
            statement += `\n${date} || ${creditStr}||${debitStr}||${balanceStr}`;
            }    
            return statement;
        }
        
    }

module.exports = BankAccount;