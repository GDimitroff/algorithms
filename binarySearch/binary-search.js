const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  let middle = Math.floor((start + end) / 2);

  switch (true) {
    case array[middle] === target:
      return middle;
    case start > end:
      return false;
    case array[middle] < target:
      return binarySearch(array, target, middle + 1, end);
    case array[middle] > target:
      return binarySearch(array, target, start, middle - 1);
  }
};

export default binarySearch;
