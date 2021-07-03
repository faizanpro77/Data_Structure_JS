 /* Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times
 */

let die = 0;

//Initialize the map with dice values
let diceCount = new Map();

for (let counter = 1; counter <= 6; counter++)
        diceCount.set(counter, 0);
var count = 0;

//To update the dice value occurrences
function updateDice(num) {
        var value = diceCount.get(num);
        value++;
        diceCount.set(num, value);
        return value;
    }
    
//Roll the dice till any one of the number is reached 10 times
while (count != 10) {
        die = Math.floor(Math.random() * 6) + 1;
        count = updateDice(die);
    }

    console.log(diceCount);

var occurrences = Array.from(diceCount.values());
var max = Math.max(...occurrences);
var min = Math.min(...occurrences);
console.log("Max occurrences = " + max);
console.log("Min occurrences = " + min);
diceCount.forEach((value, key) => {
        if (value == max) {
                console.log("Maximum number of occurrences : key " + key + " value " + value);
        }
        })

diceCount.forEach((value, key) => {
        if (value == min) {
                console.log("Minimum number of occurrences : key " + key + " value " + value);
        }
        }) 
