function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let swapped = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                swap(arr, j, j + 1);
            }
        }
        if (!swapped) return arr;
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(bubbleSort([5, 3, 5, 1, 20, 3, 9, 8]));

// time O(n)
// space O(1)
