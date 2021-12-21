// Print odds 1-20

for (var i = 1; i <= 20; i += 2) {
	console.log(i);
}

// Decreasing Multiples of 3

for (var i = 100; i >= 0; i--) {
	if (i % 3 == 0) {
		console.log(i);
	}
}

// Print the sequence

for (var i = 4; i >= -3.5; i -= 1.5) {
	console.log(i);
}

// Sigma

var sum = 0;

for (var i = 1; i < 101; i++) {
	sum += i;
}
console.log(sum);

// Factorial

var sum = 1;
for (var i = 1; i < 13; i++) {
	sum *= i;
}

console.log(sum);

// end
