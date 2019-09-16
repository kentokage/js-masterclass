export function bubbleSort(arr) {
  let passes = 0;
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    passes++;
    if (!swapped) break;
  }
  console.log("passes: ", passes);
  return arr;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
