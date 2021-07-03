//sort the array and then find the 2nd largest and the 2nd smallest element.

const prompt = require('prompt-sync')();
let randomArray = new Array();

for (count = 1; count < 10; count++) {
    let randomNumber = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    randomArray.push(randomNumber);
}

console.log(" Sort Array is " + randomArray);

let secondMinimumNumber = randomArray.sort()[1];
let secondMaximumNumber = randomArray.sort()[randomArray.length - 2];

console.log("Second Maximum : " + secondMaximumNumber + "  Second Minimum : " + secondMinimumNumber);
