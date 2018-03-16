const MILLION = require("./million.js");
let calculator = require('./index.js');
let expect = require("chai").expect;

describe('Taxe Calculator', () => {
		it('if the income is null, the tax amount should be null', () => {
      expect(calculator(0)).to.equal(0);
    });
		it('if the income is “Rp 50,000,000” , the tax amount should be “Rp 2,500,000”', () => {
      expect(calculator(50*MILLION)).to.equal(2.5*MILLION);
    });
		it('if the income is “Rp 75,000,000” , the tax amount should be “Rp 6,250,000”', () => {
      expect(calculator(75*MILLION)).to.equal(6.25*MILLION);
    });
		it('if the income is “Rp 500,000,000” , the tax amount should be “Rp 95,000,000”', () => {
      expect(calculator(500*MILLION)).to.equal(95*MILLION);
    });
		it('if the income is “Rp 750,000,000” , the tax amount should be “Rp 170,000,000”', () => {
      expect(calculator(750*MILLION)).to.equal(170*MILLION);
    });
});
