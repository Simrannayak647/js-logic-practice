// Take a character and check whether it’s uppercase, lowercase, a digit, or a special character.

let ch = '@';

if(ch >='A'&& ch <= 'Z'){
    console.log("The Character is a UpperCase",ch);
}else if(ch >='a'&& ch<='z'){
    console.log("The Character is LowerCase",ch);
}else if(ch >=0&& ch<= 9){
    console.log("The Character is a Digital number",ch);
}else{
    console.log("The Character is a Special Symbols");
}