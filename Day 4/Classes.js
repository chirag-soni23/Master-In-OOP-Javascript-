class BankAccount {
  constructor(accountHoldername, balance = 0) {
    this.accountHoldername = accountHoldername;
    this.accountNumber = Math.floor(Math.random() * 1200000000000);
    this.balance = balance;
  }

  // deposit
  deposit(amount) {
    if (amount > 0) this.balance += amount;
  }

  // withdraw
  withdraw(amount) {
    if (this.balance >= amount) this.balance -= amount;
    else console.log("Insufficient Balance");
  }

  // check balance
  checkBalance() {
    console.log(`Balance of ${this.accountHoldername}: $${this.balance}`);
  }
}

const chiragAccount = new BankAccount("Chirag", 500);
chiragAccount.deposit(1000);
chiragAccount.checkBalance();
