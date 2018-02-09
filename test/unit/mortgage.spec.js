const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgageCalc = null;

    beforeEach( () => {
        mortgageCalc = new Mortgage(200000, 5, 10, 12);
    });

    it('monthlyPayment function should exist', () => {
      expect(mortgageCalc.monthlyPayment).to.exist;
    });

    it('monthlyPayment should equal to 2121.31', () => {
      
        expect((mortgageCalc.monthlyPayment).toFixed(2)).to.equal('2121.31');
    });

    it('term should exist', () => {
      
        expect(mortgageCalc.term).to.exist;
    });
    it('interest should exist', () => {
      
        expect(mortgageCalc.interest).to.exist;
    });




})