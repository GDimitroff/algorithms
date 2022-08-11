function bubbleSort(array) {
  const arr = array.slice();

  let isSwapped = false;
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return arr;
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

export default bubbleSort;
