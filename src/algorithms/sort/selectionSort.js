export function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let minIndex = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }

      if (i === arr.length - 1) {
        if (j !== minIndex) {
          // swap
          // const tmp = arr[j];
          // arr[j] = arr[minIndex];
          // arr[minIndex] = tmp;
          swap(arr, j, minIndex);
        }
      }
    }
  }

  return arr;
}

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
