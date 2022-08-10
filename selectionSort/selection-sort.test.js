import selectionSort from './selection-sort';

describe('Selection sort', () => {
  it('Should return sorted array of integers', () => {
    expect(selectionSort([1, 3, 10, 8, 3, -1, 2])).toStrictEqual([
      -1, 1, 2, 3, 3, 8, 10,
    ]);
  });

  it('Should return sorted array of strings', () => {
    expect(
      selectionSort(['because', 'array', 'code', 'Danube', 'z', 'apple'])
    ).toStrictEqual(['Danube', 'apple', 'array', 'because', 'code', 'z']);
  });

  it('Should not mutate the original array', () => {
    expect(selectionSort([-1, 1, 2, 3])).not.toBe([-1, 1, 2, 3]);
  });
});
