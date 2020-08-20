function quicksort(arr, start = 0, end = arr.length) {
    if (start < end) {
        let pivotIndex = partition(arr, start, end);

        quicksort(arr, start, pivotIndex);
        quicksort(arr, pivotIndex + 1, end);
    }

    return arr;
}

function partition(arr, start, end) {
    const pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);

    return swapIndex;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const input0 = [4, 6, 9, 1, 2, 5];
const input1 = [4, 8, 2, 1, 5, 7, 6, 3];
const input2 = [100, -3, 2, 4, 8, 2, 1, 5, 7, 6, 3];

console.log(quicksort(input0));
// console.log(quicksort(input1));
// console.log(quicksort(input2));
