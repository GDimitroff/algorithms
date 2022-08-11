const mergeSort = (array) => {
  if (!Array.isArray(array) || isNaN(array[0])) return 'Invalid input!';

  // Base case
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (leftArr, rightArr) => {
  const result = [];

  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < leftArr.length && indexRight < rightArr.length) {
    if (leftArr[indexLeft] < rightArr[indexRight]) {
      result.push(leftArr[indexLeft]);
      indexLeft++;
    } else {
      result.push(rightArr[indexRight]);
      indexRight++;
    }
  }

  while (indexLeft < leftArr.length) {
    result.push(leftArr[indexLeft]);
    indexLeft++;
  }

  while (indexRight < rightArr.length) {
    result.push(rightArr[indexRight]);
    indexRight++;
  }

  return result;
};

export default mergeSort;
