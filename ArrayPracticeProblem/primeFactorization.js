//Prime Factorization Program
const prompt = require('prompt-sync')();

function checkPrime(number) {    
    for( count=2; number>1; count++){
            while (( number%count ) == 0 ){
                    console.log(count);
                    primeFactors.push(count);
                    number = number/count;
            }
        }
    }

let input = Number(prompt("Enter a number : "));

let  primeFactors = [];
checkPrime(input);
console.log("Prime factors are " + primeFactors);


