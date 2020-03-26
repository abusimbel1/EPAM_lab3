

const readline = require('readline-sync');
console.log("Enter number of bottles: ")
let a = readline.question();
let b = a
let number = a;
let number1 = b;
let string = "";
for(let i=a;i>-1;i--){
    console.log(a);
    a--;
    if(a==0){
        console.log("Жодної");
        break;
    }
    
}

for(let i=number;i>-1;i--){
    for(let j=number1;j>0;j--){
        // console.log("꧂");
        
        string = string + "꧂";
    }
    if(i == 0){
        string = "Жодної";
    }
    console.log(string);
    string = "";
    
    number1--;
    
}