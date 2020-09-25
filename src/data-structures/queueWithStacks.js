const { performance } = require("perf_hooks");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  pop() {
    if (!this.first) return;
    let tmp = this.first;
    this.first = this.first.next;
    tmp.next = null;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return tmp;
  }

  push(newNode) {
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  print() {
    const output = [];
    if (!this.first) return;
    let cur = this.first;
    while (cur) {
      output.push(cur.value);
      cur = cur.next;
    }

    console.log(output);
  }
}

// method 1
// dequeue easy
// enqueue more work O(n)
// size O(n)

class Queue1 {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    let node = this.s1.pop();
    while (node) {
      this.s2.push(node);
      node = this.s1.pop();
    }
    this.s1.push(newNode);
    node = this.s2.pop();
    while (node) {
      this.s1.push(node);
      node = this.s2.pop();
    }
    return ++this.size;
  }

  dequeue() {
    return this.s1.pop();
  }

  print() {
    this.s1.print();
  }
}

let test1Start = performance.now();
const q1 = new Queue1();
console.log(q1.enqueue("a"), q1.enqueue("b"), q1.enqueue("c"));
q1.print();
console.log(q1.dequeue());
q1.print();
let test1End = performance.now();
console.log("test 1: ", test1End - test1Start);

// method 2
// dequeue longer occasionally, but amoritizes to O(1)
// enqueue faster
class Queue2 {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
    this.size = 0;
  }

  enqueue(val) {
    this.s1.push(new Node(val));
    return ++this.size;
  }

  dequeue() {
    let nodeToDequeue = this.s2.pop();

    if (!nodeToDequeue) {
      let node = this.s1.pop();
      while (node) {
        this.s2.push(node);
        node = this.s1.pop();
      }
      nodeToDequeue = this.s2.pop();
    }
    return nodeToDequeue;
  }

  print() {
    this.s1.print();
    this.s2.print();
  }
}

let test2Start = performance.now();
const q2 = new Queue1();
console.log(q2.enqueue("a"), q2.enqueue("b"), q2.enqueue("c"));
q2.print();
console.log(q2.dequeue());
q2.print();
let test2End = performance.now();
console.log("test 2: ", test2End - test2Start);
