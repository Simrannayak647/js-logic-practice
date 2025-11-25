// Print sum of all odd number up to n natural number

function SumOdd(n){

    console.log("Sum of all Odd number up to n natural number are as below :");

    let sum = 0 ;

    for (let i = 1 ; i<=n; i+=2){
        sum+=i;
    }
    console.log("The sum of all odd number are as:",sum);

}

SumOdd(10)