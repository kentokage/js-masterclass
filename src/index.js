import "./styles.css";
import { bubbleSort } from "./algorithms/sort/bubbleSort.js";
import { selectionSort } from "./algorithms/sort/selectionSort.js";
import { insertionSort } from "./algorithms/sort/insertionSort.js";
import { mergeSort } from "./algorithms/sort/mergeSort.js";

document.getElementById("app").innerHTML = `
  <p>Hello World</p>
`;

// let input = [2, 1, 9, 76, 4];
let input1 = [9, 2, 5, 6, 7, 8, 9, 11, 76];
// let input2 = [3, 5, 6, 10, 99];
// [5, 1, 2, 3, 4, 5, 39, 6, 1, 10]

document.getElementById("input").innerHTML = `
  <p>${input1}</p>
`;

let result;

result = [...mergeSort(input1)];

document.getElementById("result").innerHTML = `
  <p>${result}</p>
`;
