const Transcation = require('./transcation.js')

class BankAccount{
    constructor(accountNum){
        this.accountNum = accountNum;
        this.balance = 0;
        this.transcations = [];
    };

    deposit(amount){
        if (amount >0 ){
        this.balance += amount;
        const transcation = new Transcation(amount, this.balance);
        this.transcations.push(transcation);
        console.log(`Deposited ${amount}. Balance : ${this.balance}`);
        }else{
        console.log("Invalid deposit amount");
        }
    };
    withdraw(amount) {
        if (amount >0 && amount <= this.balance){
        this.balance -= amount;
        const transcation = new Transcation(-amount, this.balance);
        this.transcations.push(transcation);
        }else{
        console.log("Insufficient fund")
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
            console.log(statement);
            }    
            return statement;
        }
        
    }

module.exports = BankAccount;