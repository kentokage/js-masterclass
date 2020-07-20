class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(v) {
		if (!this.adjacencyList[v]) {
			this.adjacencyList[v] = [];
		}
	}

	addEdge(v1, v2) {
		if (!this.adjacencyList[v1] && !this.adjacencyList[v2]) return null;

		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1, v2) {
		if (!this.adjacencyList[v1] && !this.adjacencyList[v2]) return null;

		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
	}

	removeVertex(v) {
		if (this.adjacencyList[v]) {
			// for (let vertex of this.adjacencyList[v]) {
			// 	this.removeEdge(vertex, v);
			// }

			while (this.adjacencyList[v].length) {
				this.removeEdge(this.adjacencyList[v].pop(), v);
			}

			delete this.adjacencyList[v];
		}
	}

	DFS_recur(starting) {
		const visited = {};
		const adjacencyList = this.adjacencyList;
		for (let key in this.adjacencyList) {
			visited[key] = false;
		}
		let results = [];
		const runningResults = [];
		dfs(starting, this.adjacencyList);

		function dfs(v) {
			if (!v || !adjacencyList[v].length) {
				return;
			}
			runningResults.push(v);
			visited[v] = true;
			for (let neighbor of adjacencyList[v]) {
				if (!visited[neighbor]) {
					dfs(neighbor);
				}
			}
			if (runningResults.length > results.length) {
				results = [...runningResults];
			}
			if (visitedAll(visited)) return;
			visited[v] = false;
			runningResults.pop();
		}

		function visitedAll(visited) {
			for (let key in visited) {
				if (!visited[key]) return false;
			}
			return true;
		}

		return results;
	}

	DFS_iterative(start) {
		let results = [];
		const visited = {};
		const s = [];
		s.push(start);

		while (s.length) {
			let vertex = s.pop();
			results.push(vertex);
			this.adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					s.push(neighbor);
				}
			});
		}

		return results;
	}

	BFS(start) {
		let results = [];
		const visited = {};
		const q = [];
		q.push(start);
		visited[start] = true;

		while (q.length) {
			let vertex = q.shift();
			results.push(vertex);
			this.adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					q.push(neighbor);
				}
			});
		}

		return results;
	}
}
// [ 'A', 'C', 'B', 'D', 'F', 'E' ]
let g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("San Francisco");
// g.addEdge("Tokyo", "San Francisco");
// g.addEdge("Tokyo", "Dallas");
// g.addEdge("San Francisco", "Dallas");

// console.log(g);

// g.removeVertex("Tokyo");

// console.log(g);
/*
			A
 		/		\
		B		C
		|		|
		D ----- E
		\		/
			F
*/

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);
// console.log(g.DFS_iterative("A"));
console.log(g.BFS("A"));
