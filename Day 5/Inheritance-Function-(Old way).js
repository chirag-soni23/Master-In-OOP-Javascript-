// constructor function + prototype (old way)
function BankAccount(accountHolderName, balance = 0) {
  this.accountHolderName = accountHolderName;
  this.accountNumber = Math.floor(Math.random() * 1200000000000);
  this.balance = balance;
}

// methods in prototype
// deposit
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`${amount} deposit. Balance: ${this.balance}`);
};

// withdraw
BankAccount.prototype.withdraw = function (amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    console.log(`${amount} withdraw. Balance: ${this.balance}`);
  } else {
    console.log("Insufficient Balance.");
  }
};

// Saving Account
function SavingAccount(accountHolderName, balance, interestRate) {
  BankAccount.call(this, accountHolderName, balance); // call parent constructor
  this.interestRate = interestRate;
}
SavingAccount.prototype = Object.create(BankAccount.prototype);
SavingAccount.prototype.constructor = SavingAccount;
// extra saving account method
SavingAccount.prototype.addInterest = function () {
  const interest = (this.balance * this.interestRate) / 100;
  this.balance += interest;
  console.log(`Interest added: ${interest}. Balance: ${this.balance}`);
};

// current account
function CurrentAccount(accountHolderName, balance, overdraftLimit) {
  BankAccount.call(this, accountHolderName, balance);
  this.overdraftLimit = overdraftLimit;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;
// extra current account method
CurrentAccount.prototype.withdraw = function (amount) {
  if (this.balance + this.overdraftLimit >= amount) {
    this.balance -= amount;
    console.log(
      `${amount} withdrawn (with overdraft). Balance: ${this.balance}`
    );
  } else {
    console.log("Overdraft limit exceeded");
  }
};

// saving account
console.log("=====Saving Account=====");
const savingAccount = new SavingAccount("Chirag Soni", 5000, 5);
savingAccount.deposit(1000);
savingAccount.withdraw(500);
savingAccount.addInterest();
console.log(savingAccount);

console.log("\n");

// current account
console.log("=====Current Account=====");
const currentAccount = new CurrentAccount("Raj Sharma", 3000, 1000);
currentAccount.deposit(1000);
currentAccount.withdraw(500);
currentAccount.withdraw(4500);
console.log(currentAccount);
