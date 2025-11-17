// Take an alphabet character and check if it lies between ‘a’ and ‘m’ or ‘n’ and ‘z’.
let char = 'A';

if(char >= 'a'|| 'A'&& char <='m'||'M')
    {
    console.log("The character lies in between a & n")
} else if(char>='n'||'N'&& char <='z'||'Z'){
    console.log("The character lies in between n & z");
}else{
    console.log("The character is invalid");
}