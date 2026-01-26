/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const Account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: Date.now(),
      amount,
      type,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Зняття такої суми не можливе, недостатньо коштів.");
      return;
    } else {
      this.balance -= amount;
    }
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id === id);
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    return this.transactions.reduce((acc, transaction) => {
      if (transaction.type === type) {
        return acc + transaction.amount;
      }
      return acc;
    }, 0);
  },
};

// початковий стан
console.log("Початковий баланс:", Account.getBalance());
console.log("Початкові транзакції:", Account.transactions);

// поповнення
Account.deposit(500);
Account.deposit(200);

console.log("Баланс після депозитів:", Account.getBalance());
console.log("Транзакції після депозитів:", Account.transactions);

// зняття
Account.withdraw(100);

console.log("Баланс після зняття:", Account.getBalance());
console.log("Транзакції після зняття:", Account.transactions);

// спроба зняти більше ніж є
Account.withdraw(1000);

console.log("Баланс після невдалої спроби зняття:", Account.getBalance());
console.log("Транзакції після невдалої спроби:", Account.transactions);

// підрахунок сум
console.log(
  "Сума депозитів:",
  Account.getTransactionTotal(Transaction.DEPOSIT)
);

console.log("Сума знять:", Account.getTransactionTotal(Transaction.WITHDRAW));

// пошук транзакції по id
const firstTransactionId = Account.transactions[0].id;
console.log(
  "Перша транзакція по id:",
  Account.getTransactionDetails(firstTransactionId)
);
