const { twoFn } = require('./two');

describe('two', () => {
  
  it('es5 fn & module.exports & require', () => {
    expect(twoFn(1)).toEqual("number");
    expect(twoFn('1')).toEqual("string");
  });
  
});
