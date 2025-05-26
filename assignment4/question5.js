const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

let totalPrice = 0;
let count =0;

for (let price of disneyData) {
	totalPrice += parseFloat(price.close);
	count++;
}

let average = totalPrice/count;
console.log("Average closing price of Disney is  "+ average.toFixed(2));
// average.toFixed(2) don't seem to roundUP. I am unable to get 123.01. I couldn't find a solution online too. Is there one? 
