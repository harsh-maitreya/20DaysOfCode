// 1. Declare a class for a BankAccount
class BankAccount {
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
    }
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    }
    // new method added
    checkBalance(){
      console.log(`${this.name} your current balance is ${this.balance}`)
    }
  }

  // 2. Create a new instance of the BankAccount class
  let account = new BankAccount("John Smith", 1000);

  // 3. Deposit an amount to the account
  account.deposit(500);
  console.log(account.balance); // 1500

  // 4. Withdraw an amount from the account
  account.withdraw(2000);
  console.log(account.balance); // 1500
  console.log("Withdraw 2000 : Insufficient funds");

  // 5. Withdraw a valid amount from the account
  account.withdraw(500);
  console.log(account.balance); // 1000

  // 6. Check the balance of the account
  account.checkBalance() // John Smith your current balance is 1000
  
