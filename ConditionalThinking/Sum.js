// Print Sum of N natural numbers 

function sumofNaturalNumber(n){

    let sum = 0;

    for(let i = 1; i <= n ; i++){
        sum+=i;
    }

    console.log(`Sum of first  ${n} natural number is ${sum}`);

}

sumofNaturalNumber(10);
