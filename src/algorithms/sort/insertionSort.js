// start at i, insert i to the place in the sorted list where it should belong
// checks sorted list and inserts it into the right position (start from 0 to go i)
// * it swaps 'i' to the correct place, then keeps moving everything else over to the right after the insert

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] < arr[j]) {
//         const tmp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }
//   return arr;
// }

// inner loop checks forwards
// uses extraction point as a temporary holder

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(insertionSort([5, 3, 5, 1, 20, 3, 9, 8]));
