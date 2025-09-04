function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Math.floor(Math.random() * 1200000000000); // 12-digit random account number
  this.balance = balance;

  this.deposit = function(amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      alert("Insufficient funds!");
    }
  };
}

// Function to render accounts in the UI
function renderAccount(account) {
  const accountDiv = document.createElement('div');
  accountDiv.classList.add('account');
  accountDiv.innerHTML = `
    <h2>${account.customerName}'s Account</h2>
    <p>Account Number: ${account.accountNumber}</p>
    <p>Balance: $<span id="balance-${account.accountNumber}">${account.balance}</span></p>
    <input type="number" id="deposit-${account.accountNumber}" placeholder="Deposit Amount" />
    <button class="depositBtn" data-account="${account.accountNumber}">Deposit</button>
    <input type="number" id="withdraw-${account.accountNumber}" placeholder="Withdraw Amount" />
    <button class="withdrawBtn" data-account="${account.accountNumber}">Withdraw</button>
  `;
  
  document.getElementById('accounts').appendChild(accountDiv);

  // Handle Deposit and Withdraw actions
  document.querySelector(`[data-account="${account.accountNumber}"].depositBtn`).addEventListener('click', () => {
    const depositAmount = parseFloat(document.getElementById(`deposit-${account.accountNumber}`).value);
    if (depositAmount > 0) {
      account.deposit(depositAmount);
      document.getElementById(`balance-${account.accountNumber}`).textContent = account.balance;
    } else {
      alert("Please enter a valid amount.");
    }
  });

  document.querySelector(`[data-account="${account.accountNumber}"].withdrawBtn`).addEventListener('click', () => {
    const withdrawAmount = parseFloat(document.getElementById(`withdraw-${account.accountNumber}`).value);
    if (withdrawAmount > 0) {
      account.withdraw(withdrawAmount);
      document.getElementById(`balance-${account.accountNumber}`).textContent = account.balance;
    } else {
      alert("Please enter a valid amount.");
    }
  });
}

// Create a new account when the "Create Account" button is clicked
document.getElementById('createAccountBtn').addEventListener('click', () => {
  const customerName = document.getElementById('newCustomerName').value;
  const initialBalance = parseFloat(document.getElementById('newAccountBalance').value) || 0;
  
  if (customerName && initialBalance >= 0) {
    const newAccount = new BankAccount(customerName, initialBalance);
    renderAccount(newAccount);
    alert('Account Created Successfully!');
    
    // Clear input fields
    document.getElementById('newCustomerName').value = '';
    document.getElementById('newAccountBalance').value = '';
  } else {
    alert("Please provide valid details for the account.");
  }
});
