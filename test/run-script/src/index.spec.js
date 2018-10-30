import runScript from './index.js';

describe('test', () => {
  
  it('animals', () => {
    expect(typeof runScript).toEqual("object");
    expect(typeof runScript.animals).toEqual("object")
    expect(typeof runScript.animals.cat).toEqual("object")
    expect(typeof runScript.animals.dog).toEqual("object")
  });
  
});
