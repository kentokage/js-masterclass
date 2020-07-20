export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.count = 1;
	}
}

export class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const node = new Node(value);

		if (!this.root) {
			this.root = node;
			return this;
		}

		let cur = this.root;
		while (true) {
			// need this to keep looking until we find an insertion point
			if (value === cur.value) {
				cur.count++;
				return this;
			}
			if (value > cur.value) {
				if (cur.right) {
					cur = cur.right;
				} else {
					cur.right = node;
					return this;
				}
			} else {
				if (cur.left) {
					cur = cur.left;
				} else {
					cur.left = node;
					return this;
				}
			}
		}
	}

	find(value) {
		if (!this.root) {
			return undefined;
		}

		let cur = this.root;
		let found = false;

		while (cur && !found) {
			if (value === cur.value) {
				found = true;
				console.log(cur);
				return cur;
			} else if (value > cur.value) {
				cur = cur.right;
			} else {
				cur = cur.left;
			}
		}

		console.log(cur);
		return false;
	}

	bfs() {
		let node;
		const queue = [];
		const results = [];

		if (!this.root) return queue;

		queue.push(this.root);

		while (queue.length > 0) {
			node = queue.shift();
			results.push(node.value);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}

		return results;
	}

	minDepth(node) {
		if (!node) {
			// or maybe just check if node is a value
			return 0;
		}

		return (
			1 + Math.min(this.minDepth(node.left), this.minDepth(node.right))
		);
	}

	maxDepth(node) {
		if (!node) {
			return 0;
		}

		return (
			1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right))
		);
	}

	isBalanced() {
		// because a balanced tree is defined as a tree where the depth of all leaf nodes differ by no more than one.
		// n, it will traverse each node exactly once
		// O(n) since you are going down to the bottom of the tree O(n) + O(n) = O(2n) ~= O(n)
		return this.maxDepth(this.root) - this.minDepth(this.root) <= 1;
	}

	dfsPreOrder() {
		const results = [];
		let cur = this.root;

		function traverse(node) {
			results.push(node.value); // pre
			if (node.left) {
				traverse(node.left);
			}

			if (node.right) {
				traverse(node.right);
			}
		}

		traverse(cur, results);
		return results;
	}

	dfsPostOrder() {
		const results = [];
		let cur = this.root;

		function traverse(node) {
			let numNodesLeft = 0;
			let numNodesRight = 0;
			if (node.left) {
				numNodesLeft = traverse(node.left);
			}

			if (node.right) {
				numNodesRight = traverse(node.right);
			}

			// results.push(node.value); // post
			node.leftsize = 1 + numNodesLeft;
			results.push({ value: node.value, leftsize: 1 + numNodesLeft }); // leftsize is just 1 + left size total
			return 1 + numNodesLeft + numNodesRight; // when traversing return total
		}

		traverse(cur, results);
		return results;
	}

	dfsInOrder() {
		const results = [];
		let cur = this.root;

		function traverse(node) {
			if (node.left) {
				traverse(node.left);
			}
			results.push({ value: node.value, leftsize: node.leftsize });
			if (node.right) {
				traverse(node.right);
			}
		}

		traverse(cur);
		return results;
	}

	dfsKthSmallest(k) {
		let cur = this.root;
		let count = 0;

		function traverse(node) {
			console.log("dfsKthSmallest");
			let found;
			if (node.left) {
				found = traverse(node.left);
				if (found) return found;
			}
			count++;
			if (count === k) {
				return node;
			}
			if (node.right) {
				found = traverse(node.right);
				if (found) return found;
			}
		}

		return traverse(cur);
	}

	kthSmallestUsingRank(k) {
		if (!this.root) return null;

		let cur = this.root;
		let found = false;

		let count = 0;

		while (!found && cur) {
			if (k === cur.leftsize) {
				found = true;
			} else if (k < cur.leftsize) {
				cur = cur.left;
			} else {
				k = k - cur.leftsize;
				cur = cur.right;
			}
			count++;
		}
		console.log("kthSmallestUsingRank: ", count);
		return found ? cur : null;
	}

	searchBFS(val) {
		if (!this.root || val === undefined) return false;
		const queue = [];

		queue.push(this.root);

		while (queue.length) {
			let node = queue.shift();
			if (val === node.value) return true;

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}

		return false;
	}

	searchDFS(val) {
		if (!this.root || val === undefined) return false;
		let node = this.root;

		function traverse(node) {
			if (node.value === val) return true;

			if (node.left) {
				return traverse(node.left);
			}

			if (node.right) {
				return traverse(node.right);
			}

			return false;
		}

		return traverse(node);
	}

	heightDFS() {
		if (!this.root) return 0;

		function traverse(node, height = 0) {
			if (!node) return height;

			let heightLeft = traverse(node.left, height + 1);
			let heightRight = traverse(node.right, height + 1);

			return Math.max(heightLeft, heightRight);
		}

		return traverse(this.root);
	}

	heightDFSBetter(node = this.root) {
		if (!node) return 0;

		let leftHeight = this.heightDFSBetter(node.left);
		let rightHeight = this.heightDFSBetter(node.right);

		return Math.max(leftHeight, rightHeight) + 1;
	}

	heightBFS() {
		if (!this.root) return 0;

		const q = [];
		q.push(this.root);
		let height = 0;

		let nodesCountAtLevel = q.length;

		while (nodesCountAtLevel) {
			height++; // add height
			while (nodesCountAtLevel > 0) {
				// process until nodes at this level is done
				let node = q.shift();
				if (node.left) {
					q.push(node.left);
				}
				if (node.right) {
					q.push(node.right);
				}
				nodesCountAtLevel--; // decrease count as we go
			}

			nodesCountAtLevel = q.length; // set number of nodes at this level after processing level
		}

		return height;
	}
}

var tree = new BinarySearchTree();

// painful to do this manuallyx

tree.insert(10);
tree.insert(8);
tree.insert(9);
tree.insert(13);
tree.insert(16);
tree.insert(11);
tree.insert(2);
tree.insert(1);
tree.insert(18);
tree.insert(3);
tree.insert(19);
tree.insert(4);
tree.insert(5);

//				10
// 		 8				13
//	  2		   9	11		16
// 1	3							18
// 			4							19
// 				5

console.log(tree.bfs());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());

console.log(tree.searchBFS(10));
console.log(tree.searchBFS(19));
console.log(tree.searchBFS(5));
console.log(tree.searchBFS(100));

console.log(tree.searchDFS(10));
console.log(tree.searchDFS(19));
console.log(tree.searchDFS(5));
console.log(tree.searchDFS(100));

console.log("heightDFS: ", tree.heightDFS());
console.log("height: ", tree.heightDFSBetter());
console.log("heightBFS: ", tree.heightBFS());
console.log(tree.dfsKthSmallest(3));
console.log(tree.kthSmallestUsingRank(3));
