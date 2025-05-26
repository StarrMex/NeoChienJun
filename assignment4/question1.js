const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function findMax() {
    let highestPrice = amdPrices[0];

    for (let price of amdPrices) {
        if (price > highestPrice) {
            highestPrice = price;
        }
    }
    console.log("AMD 52-week high is " + highestPrice);
}