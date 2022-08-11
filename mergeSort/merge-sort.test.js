import mergeSort from './merge-sort';

describe('Happy path!', () => {
  it('Should return array with length of 1 when passing array with 1 number', () => {
    expect(mergeSort([1])).toStrictEqual([1]);
  });

  it('Should return sorted array when passing array with length of 2', () => {
    expect(mergeSort([15, 9])).toStrictEqual([9, 15]);
  });

  it('Should return sorted array when passing array with odd length', () => {
    expect(mergeSort([15, 9, 0, 4, 8])).toStrictEqual([0, 4, 8, 9, 15]);
  });

  it('Should return sorted array when passing array which contains negative numbers', () => {
    expect(mergeSort([15, -1, 0, -5, 8])).toStrictEqual([-5, -1, 0, 8, 15]);
  });

  it('Should return sorted array when passing big numbers or even decimals', () => {
    expect(mergeSort([0.1, 230, 24, 5, 10006])).toStrictEqual([
      0.1, 5, 24, 230, 10006,
    ]);
  });
});

describe('Invalid input', () => {
  it('Returns "Invalid input" if non-array is passed in', () => {
    expect(mergeSort(1)).toBe('Invalid input!');
    expect(mergeSort('array')).toBe('Invalid input!');
  });

  it('Returns "Invalid input" if empty array is passed in', () => {
    expect(mergeSort([])).toBe('Invalid input!');
  });
});
