import { oneFn, oneArrow } from './one'

describe('one', () => {
  
  it('es6 export & import & function', () => {
    expect(oneFn(1)).toEqual("number");
    expect(oneFn('1')).toEqual("string");
  });
  
  it('es6 export & import & arrow function', () => {
    expect(oneArrow(1)).toEqual("number");
    expect(oneArrow('1')).toEqual("string");
  });
  
});
