function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	let sum = 0;
	array.forEach( function(item) {
		sum += item;
	});
	return sum;
}

function multiply (array) {
	let result = 1;
	for (let i of array){
		result *= i;
	}
	return result;
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	let result = num;

	if (num == 0 || num == 1) {
		return 1;
	} else {
		while (num > 1) {
			num--;
			result *= num;
		}
	}
	
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}