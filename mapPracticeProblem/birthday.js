
let birthdayMap = new Map();

for(let count = 1;  count <= 12; count++) 
    birthdayMap.set(count, 0);

    for(let count = 1; count <= 50; count++) {
        let birthMonth = Math.floor((Math.random() * 12) + 1);    
        birthdayMap.set(birthMonth, birthdayMap.get(birthMonth) + 1);
    }

    console.log ("birthday month is ");
    birthdayMap.forEach((value, key) => {
        console.log("month : " + key + " person : "+ value);
        
        }) 