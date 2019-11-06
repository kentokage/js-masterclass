function binarySearchWithInsertion(nums, start, end, value) {
  let left = start;
  let right = end - 1;
  let middle = Math.ceil(left + right / 2);

  while (left <= right) {
    if (nums[middle] === value) {
      return middle;
    } else if (value < nums[middle]) {
      right = middle - 1; // don't need to check middle again
    } else if (value > nums[middle]) {
      left = middle + 1;
    }
    middle = Math.ceil((left + right) / 2);
  }

  return -(middle) - 1;
}

console.log(binarySearchWithInsertion([1, 2, 3, 4, 5, 10, 19], 0, 7, 20));
