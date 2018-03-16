let calculator = require('./index.js');
let expect = require("chai").expect;

describe('Taxe Calculator', () => {
		it('if the income is null, the tax amount should be null', () => {
      expect(calculator(0)).to.equal(0);
    });
		it('if the income is “Rp 50,000,000” , the tax amount should be “Rp 2,500,000”', () => {
      expect(calculator(50000000)).to.equal(2500000);
    });
		it('if the income is “Rp 75,000,000” , the tax amount should be “Rp 6,250,000”', () => {
      expect(calculator(75000000)).to.equal(6250000);
    });
		it('if the income is “Rp 500,000,000” , the tax amount should be “Rp 95,000,000”', () => {
      expect(calculator(500000000)).to.equal(95000000);
    });
		it('if the income is “Rp 750,000,000” , the tax amount should be “Rp 170,000,000”', () => {
      expect(calculator(750000000)).to.equal(170000000);
    });
});
