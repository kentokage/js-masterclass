function binarySearch(arr, target) {
    let mid;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 10, 19], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 10, 19], 11));
