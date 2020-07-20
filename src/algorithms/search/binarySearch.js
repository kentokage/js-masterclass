// function binarySearch(nums, value) {
// 	let left = 0;
// 	let right = nums.length - 1;
// 	let middle;

// 	while (left <= right) {
// 		middle = Math.ceil((left + right) / 2);
// 		if (nums[middle] === value) {
// 			return middle;
// 		} else if (value < nums[middle]) {
// 			right = middle - 1; // don't need to check middle again
// 		} else if (value > nums[middle]) {
// 			left = middle + 1;
// 		}
// 	}

// 	return -1;
// }

const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (value < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 10, 19], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 10, 19], 11));
