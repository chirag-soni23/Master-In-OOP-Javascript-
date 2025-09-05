function BankAccount(accountHolderName, balance = 0) {
  this.accountHolderName = accountHolderName;
  this.accountNumber = Math.floor(Math.random() * 1200000000000); // Generate a random account number
  this.balance = balance;

  // withdraw
  this.withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      alert("Insufficient Balance");
    }
  };
}

// deposit
BankAccount.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.balance += amount;
  }
};

BankAccount.prototype.checkBalance = function () {
  console.log(`Balance of ${this.accountHolderName}: $${this.balance}`);
};

// Example usage
const account1 = new BankAccount("Chirag", 500);
account1.deposit(1000);
account1.checkBalance();
console.log(account1);
