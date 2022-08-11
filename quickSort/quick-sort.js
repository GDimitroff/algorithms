function quickSort(array, start = 0, end = array.length - 1) {
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

export default quickSort;
