const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

let totalPrice = 0;
let count = 0;

for (let price of msftData) {
	totalPrice += price[3];
	count++;
}
let average = totalPrice/count;

console.log("Average closing price of MSFT is " + average.toFixed(2) );

