function fib(num, memo=[undefined, 1, 1]) {
	if (memo[num] !== undefined) return memo[num];
	if (num < 3) {
		return 1;
    } else {
		let result = fib(num-2, memo) + fib(num-1, memo);
		memo[num] = result;
        return result;
    }
}

console.log(fib(10));