// Assume the array is sorted.

const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  if (start > end) {
    return false;
  }

  let middle = Math.floor((start + end) / 2);
  if (array[middle] === target) return middle;

  if (target > array[middle]) {
    return binarySearch(array, target, middle + 1, end);
  } else if (target < array[middle]) {
    return binarySearch(array, target, start, middle - 1);
  }
};

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

const result = binarySearch(primes, 0);
console.log(result);
