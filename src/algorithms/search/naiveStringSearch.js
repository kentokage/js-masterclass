export function naiveStringSearch(longStr, target) {
  let match = 0;
  for (let i = 0; i < longStr.length; i++) {
    if (longStr[i] === target[0]) {
      for (let j = 1; j < target.length; j++) {
        if (longStr[i + j] !== target[j]) {
          break;
        } else if (j === target.length - 1) {
          match += 1;
        }
      }
    }
  }
  return match;
}
