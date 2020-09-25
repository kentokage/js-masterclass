class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// last <-- node <-- node <-- first
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let tmp = this.first;
    this.first = this.first.next;
    if (--this.size === 0) {
      this.last = null;
    }
    tmp.next = null;
    return tmp.value;
  }
}

let queue = new Queue();
console.log(queue.enqueue("first"));
console.log(queue.enqueue("second"));
console.log(queue.enqueue("third"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
