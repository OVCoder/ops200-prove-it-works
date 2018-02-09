const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', function() {
  this.timeout(12000);
  let pageObject = null;

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });


  // This is where your code is going to go
  it('should contain a <button> element with text "Calculate"', () =>
    pageObject
      .evaluate(() => document.getElementById('calculate').innerHTML)
      .then(headerText => {
        //expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Calculate');
      })
  );
  it('should contain a <h1> element with text "Mortgage Calculator"', () =>
    pageObject
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
      })
  );
  it('should contain a <input> element with name "balance"', () =>
    pageObject
      .evaluate(() => document.querySelector('input[name=balance]'))
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.exist;
      })
  );
  it('should contain a <input> element with name "rate"', () =>
    pageObject
      .evaluate(() => document.querySelector('input[name=rate]'))
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.exist;
      })
  );

  it('should contain a <select> element with name "term"', () =>
  pageObject
    .evaluate(() => document.querySelector('select[name=term]'))
    .then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.exist;
    })
  );

  it('should contain a <option> element with text "15"', () =>
  pageObject
    .evaluate(() => document.querySelector('option').innerHTML)
    .then(headerText => {
      expect(headerText).to.not.be.null;
      expect(headerText).to.equal('15');
    })
  );

  it('should correctly calculate mortgage', () =>
    pageObject
      .wait()
      .type('input[name=balance]', 300000)
      .type('input[name=rate]', 3.75)
      .select('select[name=term]', 30)
      .click('button#calculate')
      .wait('#output')
      .evaluate(() => document.querySelector('#output').innerText)
      .then((outputText) => {
        expect(outputText).to.equal('$1389.35 is your payment');
      })
  );
  it('should correctly calculate mortgage', () =>
  pageObject
    .wait()
    .type('input[name=balance]', 300000)
    .type('input[name=rate]', 3.75)
    .select('select[name=term]', 15)
    .click('button#calculate')
    .wait('#output')
    .evaluate(() => document.querySelector('#output').innerText)
    .then((outputText) => {
      expect(outputText).to.equal('$2181.67 is your payment');
    })
);


});


