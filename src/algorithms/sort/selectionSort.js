// start minIndex at initial value
// SELECT the smallest value in unosrted list, set to minIndex
// do until you reach end of list
// if j !=== minIndex, swap

// function selectionSort(arr) {
//   for (let j = 0; j < arr.length; j++) {
//     let minIndex = j;  // first value of unsorted list
//     for (let i = j + 1; i < arr.length; i++) {
//       if (arr[i] < arr[minIndex]) {
//         minIndex = i;
//       }

//       if (i === arr.length - 1) {
//         if (j !== minIndex) {
//           swap(arr, j, minIndex);
//         }
//       }
//     }
//   }

//   return arr;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }

      if (j === arr.length - 1) {
        if (i !== minIndex) {
          swap(arr, i, minIndex);
        }
      }
    }
  }

  return arr;
}

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

console.log(selectionSort([5, 3, 5, 1, 20, 3, 9, 8]));
