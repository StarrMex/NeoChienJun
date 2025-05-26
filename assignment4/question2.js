const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function smaPrice() {
    let total = 0;

    for (let price of amdPrices) {
        total += price;
    }

    let average = 0;
    average = total / amdPrices.length;

    console.log ("The 7-day SMA of AMD is " + average.toFixed(2));
}
smaPrice();
