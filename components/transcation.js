class Transcation{
    constructor(amount, balanceAfterTranscation) {
        this.date = new Date ();
        this.amount = amount;
        this.balanceAfterTranscation = balanceAfterTranscation
    }
    getAmount(){
        return this.amount
    };
    getDate(){
        return this.date.toLocaleString('en-GB')
    };
    getBalanceAfterTranscation(){
        return this.balanceAfterTranscation
    };
}

module.exports = Transcation;