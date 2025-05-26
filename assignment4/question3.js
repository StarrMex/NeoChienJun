const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function smaPrice() {
    let total = 0;

    for (let price of amdPrices) {
        total += price;
    }

    let average = 0;
    average = total / amdPrices.length;
    average = average.toFixed(2);
    return average;
}

function count() {
    let average = smaPrice();
    let count = 0;

    for (let price of amdPrices) {
        if(price > average) {
            count++
        }
    }
    console.log ("Number of days AMD was above the 7-day SMA is " + count);
} 
count();