// Take 3 side and  determine whether it is equilateral, isosceles, or scalene

let a = 30 ;
let b = 20;
let c = 20;

if(a + b > c && b + c > a && c + a > b){
    if( a === b && b === c){
        console.log("This is an Equilateral Triangle");
    }else if(a === b || b === c || c === a){
        console.log("This is an Isosocle Triangle");
    }else{
        console.log("This is an Scalene");
    }
}else{
    console.log("It does not form a valid triangle");
}