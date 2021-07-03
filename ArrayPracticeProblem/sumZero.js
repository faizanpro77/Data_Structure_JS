//Program to show Sum of three Integer adds to ZERO
let array = [];
array=[3, 0, 5, 6, 10, 13, -3]
console.log(array);
n = array.length;
for ( count=0; count<n-2; count++ ) {
    for ( count1=count+1; count1<n-1; count1++ ) {
        for(count2=count1+1; count2<n; count2++ ){
            if (( array[count] + array[count1] + array[count2] ) == 0 ){
                console.log(array[count] +" " +array[count1] +" " +array[count2])
                }
            }
        }
    }
