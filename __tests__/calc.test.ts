import * as num from '../src/calc';

describe('Calc functions', () => {
  describe('add', () => {
    it('add(1, 2) === 3', () => {
      expect(num.add(1, 2)).toBe(3)
    });
    it('add(-2, 2) === 0', () => {
      expect(num.add(-2, 2)).toBe(0)
    });
  })
})
