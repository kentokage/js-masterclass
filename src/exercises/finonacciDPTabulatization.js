function fib(n) {
	if (n <= 2) return 1;
	let dp = [0,1,1];
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i-2] + dp[i-1];
	}
	return dp[n];
}

console.log(fib(10));