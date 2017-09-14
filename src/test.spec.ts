import numberToRomanNumerals from './romanNumerals';
import { expect } from 'chai';

describe('numberToRomanNumerals function', () => {
  it('1 should return I', () => {
    const result = numberToRomanNumerals(1);
    expect(result).to.equal('I');
  });
  // example
  // it('2 should return II', () => {
  //   const result = numberToRomanNumerals(2);
  //   expect(result).to.equal('II');
  // });
  // it('5 should return V', () => {
  //   const result = numberToRomanNumerals(5);
  //   expect(result).to.equal('V');
  // });
});