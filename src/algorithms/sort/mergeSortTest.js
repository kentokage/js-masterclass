function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const middle = Math.floor(arr.length / 2);

    const arr1 = mergeSort(arr.slice(0, middle));
    const arr2 = mergeSort(arr.slice(middle, arr.length));

    return mergeArray(arr1, arr2);
}

function mergeArray(arr1, arr2) {
    let x = 0;
    let y = 0;
    let result = [];

    while (x < arr1.length && y < arr2.length) {
        if (arr1[x] < arr2[y]) {
            result.push(arr1[x]);
            x++;
        } else {
            result.push(arr2[y]);
            y++;
        }
    }

    if (x > y) {
        result = result.concat(arr2.slice(y));
    } else {
        result = result.concat(arr1.slice(x));
    }

    return result;
}

console.log(mergeSort([5, 3, 5, 1, 20, 3, 9, 8]));

// 5 3 5 1   20 3 9 8
// 5 3    5 1    20 3   9 8
// 5  3  5  1  20   3  9  8

// 3 5   1 5    3 20   8 9
// 1 3 5 5     3 8 9 20
// 1 3 3 5 5 8 9 20
