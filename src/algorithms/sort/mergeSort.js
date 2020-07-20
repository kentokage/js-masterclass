// function mergeSort(arr) {
//   if (arr.length < 2) {
//     // don't need to split because it's just 1 or 0 elements
//     return arr;
//   }

//   const middle = Math.ceil(arr.length / 2); // get middle, ceil
//   const left = mergeSort(arr.slice(0, middle)); // returns divided array, that's sorted
//   const right = mergeSort(arr.slice(middle));
//   return mergeArray(left, right); // mergeArray merges and sorts array
// }

// function mergeArray(x, y) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < x.length && j < y.length) {
//     // limit is reaching either of the end of the arrays, used for uneven arrays
//     if (x[i] < y[j]) {
//       result.push(x[i++]);
//     } else {
//       result.push(y[j++]);
//     }
//   }

//   if (i === x.length) {
//     // push the rest of the other array in
//     result = result.concat(y.slice(j));
//   } else {
//     result = result.concat(x.slice(i));
//   }

//   return result;
// }

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle, arr.length));

  return mergeArray(left, right);
}

function mergeArray(left, right) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i++]);
    } else {
      results.push(right[j++]);
    }
  }

  if (i === left.length) {
    results.push(...right.slice(j));
  } else {
    results.push(...left.slice(i));
  }

  return results;
}

console.log(mergeSort([5, 3, 5, 1, 20, 3, 9, 8]));
