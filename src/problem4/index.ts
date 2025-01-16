

//complexity : O(n)
function sum_to_n_a(n: number): number {
	// your code here
	let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//complexity : O(1)
function sum_to_n_b(n: number): number {
	// your code here
	return (n * (n + 1)) / 2;

}

//complexity : O(1)
function sum_to_n_c(n: number): number {
	// your code here
	if (n === 1) return 1;
    return n + sum_to_n_c(n - 1);
}

function main() : void {
	const result_1 = sum_to_n_a(5);
	console.log(`Using sum_to_n_a and n = 5, then result : ${result_1}`);
	const result_2 = sum_to_n_b(5);
	console.log(`Using sum_to_n_b and n = 5, then result : ${result_2}`);
	const result_3 = sum_to_n_c(5);
	console.log(`Using sum_to_n_c and n = 5, then result : ${result_3}`);
}

//execute
// run command : npx ts-node index
main();