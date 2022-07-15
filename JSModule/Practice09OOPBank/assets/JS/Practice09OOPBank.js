// Practice 09 - OOP bank 

class BankAccount {
    constructor(agency, number, type) {
        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }

    getBalance() {
        return this._balance;
    }

    setBalance(balanceValue) {
        this._balance = balanceValue;
    }

    withdrawValue(withdrawalQuantity) {
        if (withdrawalQuantity > this._balance) {
            return 'Error. Insufficient funds. Please, try again.';
        }
        this._balance -= withdrawalQuantity;

        return this._balance;
    }

    depositValue(depositQuantity) {
        this._balance += depositQuantity;

        return this._balance;
    }
}

class ActiveAccount extends BankAccount {
    constructor(agency, number, creditCard) {
        super(agency, number);
        this.type = 'Active account';
        this._creditCard = creditCard;
    }

    getCreditCard() {
        return this._creditCard;
    }

    setCreditCard(creditCardProperty) {
        this._creditCard = creditCardProperty;
    }
}

class CashStorageAccount extends BankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = 'Storage';
    }
}

class UniversityAccount extends BankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = 'University';
    }

    withdrawMoney(withdrawalAmount) {
        if (withdrawalAmount > 550) {
            return 'Error: Invalid value. Insert a value smaller than or equal to US$550.';
        }

        this._balance -= withdrawalAmount;

        return this._balance;
    }
}

// To use the accounts

// Test A - Using "Active" account
const accountA = new ActiveAccount(1, 233, true);
console.log(accountA._balance);
accountA.depositValue(1400);
console.log(accountA._balance);
accountA.withdrawValue(300);
console.log(accountA._balance);
console.log(accountA.withdrawValue(2000));
console.log(accountA);

// Test B - Using "Cash storage" account
const cashStorageAccountA = new CashStorageAccount(2, 400);
console.log(cashStorageAccountA._balance);
cashStorageAccountA.depositValue(1300);
cashStorageAccountA.withdrawValue(50);
console.log(cashStorageAccountA._balance);
console.log(cashStorageAccountA);

// Test C - Using "Universitary" account
const universityAccountA = new UniversityAccount(1, 555);
console.log(universityAccountA._balance);
universityAccountA.depositValue(5000);
universityAccountA.withdrawValue(100);
universityAccountA.withdrawMoney(150);
console.log(universityAccountA.withdrawMoney(650));
console.log(universityAccountA);