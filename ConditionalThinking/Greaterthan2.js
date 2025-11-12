// Take three and print greatest number 
let num1 = 10;
let num2 = 25;
let num3 = 15;

let largest = Math.max(num1, num2, num3);
console.log(largest + " is the largest");

let  x = 34;
let y = 45;
let z= 56;

if( x >= y && x>= z){
    console.log("This number is largest",x);
}else if(y >=x && y>= z){
    console.log("This number is the largest",y);
}else{
    console.log("This number is the largest",z);
}