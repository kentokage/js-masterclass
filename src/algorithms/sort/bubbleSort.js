// takes highest value and passes to the very end
// iterate next array size - 1

// function bubbleSort(arr) {
//   let passes = 0;
//   for (let i = arr.length; i > 0; i--) {
//     // we start at the end because largest value bubbles up to the top
//     let swapped = false; // classic optimization
//     for (let j = 0; j < i - 1; j++) {
//       // reach to the 2nd to the latest, largest value bubbles up to the top
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         swapped = true;
//       }
//     }
//     passes++;
//     if (!swapped) break; // if never swapped, it's already in order
//   }
//   console.log("passes: ", passes);
//   return arr;
// }

// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// };

// takes highest value and passes to the very end

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(bubbleSort([5, 3, 5, 1, 20, 3, 9, 8]));
