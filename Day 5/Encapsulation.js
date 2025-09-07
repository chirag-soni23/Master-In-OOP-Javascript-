// Base BankAccount class
class BankAccount {
  #balance;
  #accountNumber;

  constructor(accountHolderName, balance = 0) {
    this.accountHolderName = accountHolderName;
    this.#accountNumber = Math.floor(Math.random() * 12000000000);
    this.balance = balance; // use setter for validation
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number.");
    }
    this.#balance += amount;
    console.log(`${amount} deposited. Balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdraw amount must be a positive number.");
    }
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} withdrawn. Balance: ${this.#balance}`);
    } else {
      console.log("Insufficient balance.");
    }
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error("Balance must be a number.");
    }
    if (amount < 0) {
      throw new Error("Balance cannot be negative.");
    }
    this.#balance = amount;
  }

  get accountNumber() {
    return this.#accountNumber;
  }
}

// SavingAccount class
class SavingAccount extends BankAccount {
  #interestRate;

  constructor(accountHolderName, balance, interestRate) {
    super(accountHolderName, balance);
    this.interestRate = interestRate; // use setter
  }

  addInterest() {
    const interest = (this.balance * this.#interestRate) / 100;
    this.deposit(interest);
    console.log(`Interest added: ${interest}`);
  }

  get interestRate() {
    return this.#interestRate;
  }

  set interestRate(rate) {
    if (typeof rate !== "number" || rate < 0) {
      throw new Error("Interest rate must be a positive number.");
    }
    this.#interestRate = rate;
  }
}

// CurrentAccount class
class CurrentAccount extends BankAccount {
  #overdraftLimit;

  constructor(accountHolderName, balance, overdraftLimit) {
    super(accountHolderName, balance);
    this.overdraftLimit = overdraftLimit; // use setter
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdraw amount must be a positive number.");
    }

    if (amount <= this.balance + this.#overdraftLimit) {
      this.balance = this.balance - amount;
      console.log(`${amount} withdrawn (with overdraft). Balance: ${this.balance}`);
    } else {
      console.log("Overdraft limit exceeded");
    }
  }

  get overdraftLimit() {
    return this.#overdraftLimit;
  }

  set overdraftLimit(limit) {
    if (typeof limit !== "number" || limit < 0) {
      throw new Error("Overdraft limit must be a positive number.");
    }
    this.#overdraftLimit = limit;
  }
}


// Saving Account
console.log("===== Saving Account =====");
const savingAccount = new SavingAccount("Chirag Soni", 5000, 5);
savingAccount.deposit(1000);
savingAccount.withdraw(500);
savingAccount.addInterest();
console.log(`Balance: ${savingAccount.balance}`);
console.log(`Account Number: ${savingAccount.accountNumber}`);

// Current Account
console.log("\n===== Current Account =====");
const currentAccount = new CurrentAccount("Raj Sharma", 3000, 1000);
currentAccount.deposit(1000);
currentAccount.withdraw(50);
currentAccount.withdraw(45);
console.log(`Balance: ${currentAccount.balance}`);
console.log(`Account Number: ${currentAccount.accountNumber}`);


