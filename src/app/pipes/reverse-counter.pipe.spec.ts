import { ReverseCounterPipe } from './reverse-counter.pipe';

describe('ReverseCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
