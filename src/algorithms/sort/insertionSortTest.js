function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j, j - 1);
            }
        }
    }

    return arr;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(insertionSort([5, 3, 5, 1, 20, 3, 9, 8]));
