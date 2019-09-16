export function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return mergeArray(left, right);
}

function mergeArray(x, y) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < x.length && j < y.length) {
    if (x[i] < y[j]) {
      result.push(x[i++]);
    } else {
      result.push(y[j++]);
    }
  }

  if (i === x.length) {
    result = result.concat(y.slice(j));
  } else {
    result = result.concat(x.slice(i));
  }

  return result;
}
