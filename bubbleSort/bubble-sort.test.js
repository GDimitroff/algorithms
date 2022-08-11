import bubbleSort from './bubble-sort';

describe('Bubble sort', () => {
  it('Should return sorted array of integers', () => {
    expect(bubbleSort([1, 3, 10, 8, 3, -1, 2])).toStrictEqual([
      -1, 1, 2, 3, 3, 8, 10,
    ]);
    expect(bubbleSort([1])).toStrictEqual([1]);
    expect(bubbleSort([2, 1])).toStrictEqual([1, 2]);
  });

  it('Should return sorted array of strings', () => {
    expect(
      bubbleSort(['because', 'array', 'code', 'Danube', 'z', 'apple'])
    ).toStrictEqual(['Danube', 'apple', 'array', 'because', 'code', 'z']);
  });
});
