// not distributed enough, not fast
const xxxhash = function(key, arrayLen) {
	let total = 0;
	for (let char of key) {
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}

	return total;
}

// better, but not perfect
// total value should include prime
// array length should be prime as well
const hash = function(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total + WEIRD_PRIME + value) % arrayLen;
	}
	return total;
}

console.log(hash("pink", 13));