"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 

class Bank{
    static nextNumber=0;
    constructor(){
        Bank.nextNumber++;
        this._account=[];
    }
    
    addAccount(){
       this._account.push(new Account(Bank.nextNumber++))
    }
    
    addSavingsAccount(interest){
        this._account.push(new SavingsAccount(Bank.nextNumber++,interest))
    }
    
    addCheckingAccount(overdraft){
        this._account.push(new CheckingAccount(Bank.nextNumber++,overdraft))
    }
   
    closeAccount(accNum){
        let index=this._account.findIndex((item)=>item._number===accNum)
        this._account.splice(index,1)
    }
    
    accountReport(){
      let report=""  
      for(let acc of this._account ){
        report+=acc.toString()+"\n"
      }
      return report;
    }
}

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.Bank = Bank;
