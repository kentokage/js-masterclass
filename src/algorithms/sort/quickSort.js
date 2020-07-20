// function pivot(arr, start = 0, end = arr.length) {
// 	var pivot = arr[start];
// 	var swapIndex = start;

// 	for (let i = start + 1; i <= end; i++) {
// 		if (pivot > arr[i]) {
// 			swapIndex++; // found somethign small, so increase swapIndex
// 			// swap swapIndex with i
// 			swap(arr, i, swapIndex);
// 		}
// 	}

// 	swap(arr, start, swapIndex);

// 	return swapIndex;
// }

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const input0 = [4, 6, 9, 1, 2, 5];
const input1 = [4, 8, 2, 1, 5, 7, 6, 3];
const input2 = [100, -3, 2, 4, 8, 2, 1, 5, 7, 6, 3];

// function quicksort(arr, start = 0, end = arr.length - 1) {
// 	if (start < end) {
// 		// if left === right, then we are done
// 		let pivotIndex = pivot(arr, start, end);

// 		quicksort(arr, 0, pivotIndex - 1);
// 		quicksort(arr, pivotIndex + 1, end);

// 		return arr;
// 	}
// }

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
};

const quicksort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    // base condition, only want to compare when indexes are valid, need at least 2 positions to compare
    let pivotIndex = pivot(arr, start, end);

    quicksort(arr, 0, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, end);
  }
  return arr;
};

console.log(quicksort(input0));
// console.log(quicksort(input1));
// console.log(quicksort(input2));

// run example

// [4, 8, 2, 1, 5, 7, 6, 3]

// 4
// 4, 2, 8, 1, 5, 7, 6, 3

// 4, 2, 1, 3, 5, 7, 6, 8

// 4, 2, 1, 3, 5, 7, 6, 8
// swap pivot point with swapIndex

// 3, 2, 1, 4, 5, 7, 6, 8
// items to left of 4 are smaller
// items to right of 4 are bigger

// then, call quick sort on left side and right side

// 3, 2, 1, 4, 5, 7, 6, 8
//			4
// 3, 2, 1,   5, 7, 6, 8
/*
		3		5 
	2 1				7 6 8
	  2				   7
	1				  6	8
*/

// quit recursion when subs are size === 1
