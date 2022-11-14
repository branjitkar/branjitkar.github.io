class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this.overdraft = overdraft;
  }
  setoverdraft(overdraft) {
    this.overdraft = overdraft;
  }
  getoverdraft() {
    return this.overdraft;
  }
  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance + this.overdraft) {
      throw Error("Insufficient funds. overdraft exceded");
    }
    this._balance -= amount;
  }
  /**
   * @returns {string} representation of this account
   */
  toString() {
    return (
      "Checking" + super.toString() + " overdraft limit: " + this.overdraft
    );
  }
  endOfMonth() {
    let status = "";
    if (this.getBalance() < 0) status += "Warning, low balance ";
    status += this.toString();
    return status;
  }
}
