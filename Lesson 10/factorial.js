
var number = 5;

console.log(factorial(number));

function factorial(number, sum = 1) {
	sum *= number--;
	return (!number ?  sum : factorial(number,sum));
}