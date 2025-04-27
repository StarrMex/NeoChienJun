const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below
const average = msftData.reduce((sum, value) => sum + value, 0) / msftData.length;
console.log(average); 