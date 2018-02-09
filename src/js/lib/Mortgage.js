module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    get monthlyPayment() {
      // this getter should return the result of your monthly payment calculation
      // used in a previous assignment.
        const P = this.principal;
        const int = ((this.interest) / 100 / this.period);
        const tERM = this.term * this.period;
        const MonthlyPayment = P * (int * Math.pow((1 + int), tERM)) / (Math.pow((1 + int), tERM) - 1);
        return MonthlyPayment;
      
    }
  }   