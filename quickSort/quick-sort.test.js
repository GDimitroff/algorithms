import quickSort from './quick-sort';

describe('Quick sort', () => {
  it('Should return sorted array of integers', () => {
    expect(quickSort([1, 3, 10, 8, 3, -1, 2])).toStrictEqual([
      -1, 1, 2, 3, 3, 8, 10,
    ]);
  });

  it('Should return sorted array of strings', () => {
    expect(
      quickSort(['because', 'array', 'code', 'Danube', 'z', 'apple'])
    ).toStrictEqual(['Danube', 'apple', 'array', 'because', 'code', 'z']);
  });

  it('Should return empty array', () => {
    expect(quickSort([])).toStrictEqual([]);
  });
});
