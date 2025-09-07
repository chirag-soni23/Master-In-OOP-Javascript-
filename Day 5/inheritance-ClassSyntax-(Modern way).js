// class syntax (modern way)
class BankAccount {
  constructor(accountHolderName, balance = 0) {
    this.accountHolderName = accountHolderName;
    this.accountNumber = Math.floor(Math.random() * 120000000000);
    this.balance = balance;
  }
  // deposit
  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposit. Balance: ${this.balance}`);
  }
  // withdraw
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`${amount} withdraw. Balance: ${this.balance}`);
    } else {
      console.log("Insufficient Balance.");
    }
  }
}

// Saving account
class SavingAccount extends BankAccount {
  constructor(accountHolderName, balance, interestRate) {
    super(accountHolderName, balance); // parent constructor call
    this.interestRate = interestRate;  // save interestRate
  }

  addInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
    console.log(`Interest added: ${interest}. Balance: ${this.balance}`);
  }
}

// Current account
class CurrentAccount extends BankAccount {
  constructor(accountHolderName, balance, overdraftLimit) {
    super(accountHolderName, balance); // parent constructor call
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) { 
    if (this.balance + this.overdraftLimit >= amount) {
      this.balance -= amount;
      console.log(
        `${amount} withdrawn (with overdraft). Balance: ${this.balance}`
      );
    } else {
      console.log("Overdraft limit exceeded");
    }
  }
}

// Saving Account Example
console.log("===== Saving Account =====");
const savingAccount = new SavingAccount("Chirag Soni", 5000, 5);
savingAccount.deposit(1000);
savingAccount.withdraw(500);
savingAccount.addInterest();
console.log(savingAccount);

console.log("\n");

// Current Account Example
console.log("===== Current Account =====");
const currentAccount = new CurrentAccount("Raj Sharma", 3000, 1000);
currentAccount.deposit(1000);
currentAccount.withdraw(500);
currentAccount.withdraw(4500);
console.log(currentAccount);
