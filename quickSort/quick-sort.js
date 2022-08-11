function quickSort(array, start, end) {
  if (start >= end) return array;

  const index = partition(array, start, end);
  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);

  return array;
}

function partition(array, start, end) {
  let pivotIndex = start;
  let pivotValue = array[end];

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(array, pivotIndex, end);
  return pivotIndex;
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const array = [9, 3, 4, 6, 5];
const result = quickSort(array, 0, array.length - 1);
console.log(result);

export default quickSort;
