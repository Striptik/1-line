import * as str from '../src/string';

describe('String Tests', () => {
  const { len } = str;
  it('len(\'\') === 0', () => {
    expect(len('')).toBe(0);
  });
});
