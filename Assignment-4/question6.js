// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

//let data = ()
//for price in data:
//	if price < 3:
//    data.push(price)

let arrangePrices = amdPrices.sort((a,b) => a-b);

console.log("The three lowest prices are " + arrangePrices[0] + ", " + arrangePrices[1] + " and " + arrangePrices[2] + ".");