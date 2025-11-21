// Print sum of all even number up to n natural number 

function SumEven(n){
    console.log("Sum of all even number are as: ");
    let sum = 0;

    for(i = 2 ; i<=n ; i+=2 ){
        sum+=i;
    }
    console.log("The Sum of all even number up to n natural number are: ",sum);
}

SumEven(10);
