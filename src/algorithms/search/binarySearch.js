export function binarySearch(nums, value) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.ceil(left + right / 2);

  while (left < right) {
    if (nums[middle] === value) {
      return middle;
    } else if (value < nums[middle]) {
      right = middle - 1;
    } else if (value > nums[middle]) {
      left = middle + 1;
    }
    middle = Math.ceil((left + right) / 2);
  }

  return -1;
}

binarySearch([1, 2, 3, 4, 5, 10, 19], 10);
