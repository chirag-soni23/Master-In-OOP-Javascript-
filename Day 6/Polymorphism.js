// Base class
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited. New balance = ${this.balance}`);
  }

  withdraw(amount) {
    throw new Error("Withdraw method subclass me override karo");
  }

  getDetails() {
    return `Account No: ${this.accountNumber}, Balance: ${this.balance}`;
  }
}

// Saving Account class
class SavingAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.log("❌ Insufficient balance (Saving Account).");
    } else {
      this.balance -= amount;
      console.log(`✅ Withdrawn ${amount}. Remaining balance = ${this.balance}`);
    }
  }

  addInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
    console.log(`💰 Interest added = ${interest}, New balance = ${this.balance}`);
  }
}

// Current Account class
class CurrentAccount extends BankAccount {
  constructor(accountNumber, balance, overdraftLimit) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (this.balance - amount < -this.overdraftLimit) {
      console.log("❌ Overdraft limit exceeded (Current Account).");
    } else {
      this.balance -= amount;
      console.log(`✅ Withdrawn ${amount}. Remaining balance = ${this.balance}`);
    }
  }
}

// Polymorphic usage
const accounts = [
  new SavingAccount("SAV123", 1000, 5),
  new CurrentAccount("CUR456", 2000, 500)
];

for (const acc of accounts) {
  console.log("\n---", acc.constructor.name, "---");
  acc.deposit(500);
  acc.withdraw(1200);
  console.log(acc.getDetails());
}
