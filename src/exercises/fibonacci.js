function fib(num){
    if (num < 3) {
		return 1;
    } else {
        return fib(num-2) + fib(num-1);
    }
}

console.log(fib(0));