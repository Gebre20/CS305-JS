"use strict";
/* global Account  */

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class CheckingAccount extends Account{
    constructor(number, overDraft){
        super(number);
        this.setOverDraft(overDraft);

    }
    getOverDraft(){
        return this._overDraft;
    }
    setOverDraft(overDraft){
        this._overDraft =overDraft;
    }

    withdraw(amount) {
        if (amount <= -1*this._overDraft) {
            throw new RangeError("withdraw anount exceeds overdraft limit");
        }
        this._balance -= amount;
    }
    toString(){
        let str = "CheckingAccount "+this._number+ ":"+" balance "+ this._balance+" overdraft limit: "+this._overDraft;
        return str;
    }
    endOfMonth(){
      if(this._balance < 0){
       let report = "Balance is below zero "+this._number+":"+ "balance: "+this._balance+" overdraft limit: " +this._overDraft;
       return report 
    }else{
    return super.endOfMonth();
    }
    }
}



/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.CheckingAccount = CheckingAccount;
