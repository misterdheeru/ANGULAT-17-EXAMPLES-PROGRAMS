import { OrdinalNumberPipe } from '../pips/ordinal-number.pipe';

describe('OrdinalNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
