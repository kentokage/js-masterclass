class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	print() {
		let current = this.head;
		let arr = [];
		while (current) {
			arr = arr.concat(current.val);
			current = current.next;
		}
		console.log(arr);
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return;
		if (this.head == this.tail) {
			let current = this.head;
			this.head = this.tail = null;
			this.length--;
			return current;
		}

		let current = this.head;
		let pre = current;
		while (current.next) {
			pre = current;
			current = current.next;
		}

		this.tail = pre;
		pre.next = null;
		this.length--;
		return current;
	}

	shift() {
		if (!this.head) return;
		let tmp = this.head;
		this.head = this.head.next;
		tmp.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return tmp;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let node = this.head;
		while (index > 0) {
			node = node.next;
			index--;
		}
		return node;
	}

	set(index, val) {
		let node = this.get(index);
		if (!node) return false;
		node.val = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		// not needed
		// if (index === this.length) return this.push(val) ? true : false; 
		if (index === 0) return !!this.unshift(val); // bangbang, double negate

		let pre = this.get(index - 1);
		let node = new Node(val);
		node.next = pre.next;
		pre.next = node;
		this.length++;

		return true;

	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();
		let pre = this.get(index - 1);
		let removed = pre.next;
		pre.next = pre.next.next;
		this.length--;

		return removed;
	}

	reverse(head = this.head) {

		// my solution
		// if (this.length === 0 || this.length === 1) return;
		// [this.tail, this.head] = [this.head, this.tail];
		// let prev = this.tail;
		// let node = prev.next;
		// let next = node ? node.next : null;     // check if it's at end of list
		// prev.next = null;

		// while(node) {
		// 	node.next = prev;
		// 	prev = node;
		// 	let tmp = next ? next.next : null;
		// 	node = next;
		// 	next = tmp;
		// }

		// his solution
		// let node = this.head;
		// this.head = this.tail;
		// this.tail = node;
		// var next;
		// var prev = null;

		// for (let i = 0; i < this.length; i++) {
		// 	next = node.next;
		// 	node.next = prev;
		// 	prev = node;
		// 	node = next;
		// }

		// from leetcode
		let prev = null;    // start at node before old head    
		let node = this.head;
	
		while(node) { 
			let next = node.next;     // save next
			node.next = prev;
			prev = node;
			node = next;
		}

		[this.head, this.tail] = [this.tail, this.head];

		return this;
	}

	reverseRecur(head = this.head) {
		if ((head == null )|| head.next == null) {
			return head;
		}

		let reversedListHead = this.reverseRecur(head.next);
		head.next.next = head;
		head.next = null;
		if (this.head === head) {
			[this.head, this.tail] = [this.tail, this.head];
		}
		return reversedListHead;
	}
}

let list = new SinglyLinkedList();
// list.push("Hello");
// list.push("Goodbye");
// list.push("!");
// list.push(" <3");

list.print();
console.log(list.reverseRecur());
list.print();