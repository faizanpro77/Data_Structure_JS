//find the 2nd largest and the 2nd smallest element without sorting the array.

const prompt = require('prompt-sync')();

let randomArray = [];

for (count = 1; count < 10; count++) {
    let randome = Math.floor((Math.random() * (999 - 100 +1)) + 100);
    randomArray.push(randome);
}
console.log("Array is " + randomArray);
let firstMax = randomArray[0];
let secondMax = randomArray[0];
let firstMin = randomArray[0];
let secondMin = randomArray[0];

for (let number of randomArray) {
    if (number > firstMax) {
        secondMax = firstMax;
        firstMax = number;
    }
    else if (number > secondMax) {
        secondMax = number;
    }
    if (number < firstMin) {
        secondMin = firstMin;
        firstMin = number;
    }
    else if (number < secondMin) {
        secondMin = number;
    }
}
console.log("Second Maximum : " + secondMax + "  Second Minimum : " + secondMin);
