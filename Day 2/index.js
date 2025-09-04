function BankAccount(accountHolderName, balance = 0) {
  this.accountHolderName = accountHolderName;
  this.accountNumber = Math.floor(Math.random() * 1200000000000); // Generate a random account number
  this.balance = balance;

  // deposit
  this.deposit = (amount) => {
    if (amount > 0) {
      this.balance += amount;
    }
  };

  // withdraw
  this.withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      alert("Insufficient Balance");
    }
  };
}

// Chirag Account
const chiragAccount = new BankAccount("Chirag Soni", 10000);
chiragAccount.deposit(10000);
chiragAccount.withdraw(15000);

// Raj Account
const rajAccount = new BankAccount("Raj Sharma");
rajAccount.deposit(5000);
rajAccount.withdraw(2000);

// Checking the account details
console.log(chiragAccount);
console.log(rajAccount);
