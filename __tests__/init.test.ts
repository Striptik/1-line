import { init } from '../src/index';

test('Init function', () => {
  expect(init('Carl')).toBe('Hello Carl');
});
