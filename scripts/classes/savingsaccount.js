class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this.interest = interest;
  }
  setInterest(intrest) {
    this.intrest = interest;
  }
  getInterest() {
    return this._interest;
  }
  addInterest() {
    let intrestAmount = (this.getBalance() * this.interest) / 100;
    this.deposit(intrestAmount);
    return intrestAmount;
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    return "Savings" + super.toString() + " interest rate: " + this.interest;
  }

  endOfMonth() {
    let intrestAdded = this.addInterest();
    return this.toString() + " interest: " + intrestAdded;
  }
}
