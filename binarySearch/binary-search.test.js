import binarySearch from './binary-search';

let primes;
beforeAll(() => {
  primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
});

describe('Binary search', () => {
  it('Should return the last array index', () => {
    expect(binarySearch(primes, 97)).toBe(24);
  });

  it('Should return the first array index', () => {
    expect(binarySearch(primes, 2)).toBe(0);
  });

  it('Should return the target index', () => {
    expect(binarySearch(primes, 19)).toBe(7);
    expect(binarySearch(primes, 3)).toBe(1);
    expect(binarySearch(primes, 83)).toBe(22);
  });

  it('Should return false when target is not present', () => {
    expect(binarySearch(primes, 4)).toBeFalsy();
    expect(binarySearch(primes, -1)).toBeFalsy();
  });
});
