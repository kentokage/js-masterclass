class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	printForward() {
		let current = this.head;
		let output = [];
		while (current) {
			output.push(current.val);
			console.log(current);
			current = current.next;
		}

		console.log(output);
	}

	printReverse() {
		let current = this.tail;
		let output = [];
		while (current) {
			output.push(current.val);
			current = current.prev;
		}

		console.log(output);
	}

	push(val) {
		let node = new Node(val);
		if (!this.head) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let oldTail = this.tail;
		if (this.length == 1) {
			this.head = this.tail == null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		this.length--;
		return oldTail;
	}

	shift() {
		if (!this.head) return undefined;

		let oldHead = this.head;
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead;
	}

	unshift(val) {
		let newNode = new Node(val);
		if (this.length == 0) {
			this.head = this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}
		let current;
		const middle = Math.floor(this.length / 2);
		if (index <= middle) {
			current = this.head;
			for (let i = 0; i < index; i++) {
				current = current.next;
			}
		} else {
			current = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				current = current.prev;
			}
		}
		return current;
	}

	set(index, val) {
		let node = this.get(index);
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index == 0) return !!this.unshift(val);
		else if (index == this.length) return !!this.push(val);
		
		let node = this.get(index - 1);
		let newNode = new Node(val);

		newNode.next = node.next;
		newNode.next.prev = newNode;
		newNode.prev = node;
		node.next = newNode;
		this.length++;

		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return false;
		if (index == 0) return !!this.shift();
		if (index == this.length - 1) return !!this.pop();

		let node = this.get(index);
		node.prev.next = node.next;
		node.next.prev = node.prev;
		node.next = null;
		node.prev = null;
		this.length--;
		return node;
	}

	reverse() {
		// no need for prev var since we have a pointer already
		let node = this.head;

		while (node) {
			let next = node.next;
			node.next = node.prev;
			node.prev = next;
			node = next;
		}

		[this.head, this.tail] = [this.tail, this.head];

		return this;
	}
}

let list = new DoublyLinkedList();

list.push("Hello");
list.push("Goodbye");
list.push("!");
list.push("<3");

list.reverse();
list.printForward();