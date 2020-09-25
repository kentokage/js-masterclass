class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// last <-- node <-- node <--first
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

	push(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		return ++this.size;
	}
}

let stack = new Stack();
console.log(stack.push("a"));
console.log(stack.push("b"));
console.log(stack.push("c"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

let result = (function(x, f = () => x) {
	var x;
	var y = x;
	x = 2;
	return [x, y, f()];
})(3);

console.log(result);