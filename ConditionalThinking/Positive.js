let n = -0;

if(n === 0){
    console.log("The number is zero",n);
}else if( n > 0 && n % 2 === 0){
    console.log("The number is positive & even");
}else if(n> 0 && n % 2 !== 0){
    console.log("The number is Positive & Odd:",n);
}else if(n <0 && n % 2=== 0){
    console.log("The number is Negative and Even:",n);
}else {
    console.log("The numnber is Negative and Odd:",n);
}