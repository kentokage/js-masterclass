class HashTable {
	constructor(size=53) {
		this.keyMap = new Array(size);
		this.INNER_HASH_SIZE = 13;
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total + WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	} 

	set(key, value) {
		const keyHash = this._hash(key);
		if (!this.keyMap[keyHash]) {	// if nothing...
			this.keyMap[keyHash] = [];
		} 
		this.keyMap[keyHash].push([key, value]);
	}

	get(key) {
		const keyHash = this._hash(key);
		for (let item of this.keyMap[keyHash]) {
			if (item[0] === key) {
				return item[1];
			}
		}
		return undefined;
	}

	keys() {
		const keys = [];
		for (let chain of this.keyMap) {
			if (chain) {
				for (let item of chain) {
					if (!keys.includes(item[0])) {
						keys.push(item[0]);
					}
				}
			}
		}
		return keys;
	}

	values() {
		const values = [];
		for (let chain of this.keyMap) {
			if (chain) {
				for (let item of chain) {
					values.push(item[1]);
				}
			}
		}
		return values;
	}

	// if using Array, using Array.includes() to check dupes
	uniqueValues() {
		const uniqueSet = new Set();
		for (let chain of this.keyMap) {
			if (chain) {
				for (let item of chain) {
					if (!uniqueSet.has(item[1])) {
						uniqueSet.add(item[1]);
					}
				}
			}
		}
		return [...uniqueSet];
	}
}

let ht = new HashTable(7);
ht.set("pink", "pinkValue");
ht.set("blue", "blueValue");
ht.set("blue", "blueDoubleValue");
ht.set("red", "redValue");
ht.set("yellow", "yellowValue");
ht.set("white", "whiteValue");
ht.set("whitish", "whiteValue");
// console.log(ht.get("pink"));
// console.log(ht.get("blue"));
// console.log(ht.get("red"));
// console.log(ht.get("yellow"));
// console.log(ht.get("white"));
// console.log(ht.get("bluey"));
console.log(ht.keys());
console.log(ht.values());
console.log(ht.uniqueValues());