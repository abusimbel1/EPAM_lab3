// const fs = require("fs");
// const fs=require("fs")


var info = {number_of_children:"none", profession:"none", city:"none",name: "none"};
let number_of_children = ["zero", "one", "two", 'three'];
let name = ["John", "Robert", "Patricia", 'Michael'];
let profession = ["Architect", "Cleaner", "Doctor", 'Model'];
let city = ["Manila", "Seoul", "Lagos", 'Moscow'];

// let content = fs.readFileSync("./text.txt")
	
// let fileContent = fs.readFileSync("text.txt", "utf8");

for(let i=0;i<number_of_children.length;i++){
    let children = number_of_children[i];
    number_of_children[i] = confirm(`Do you want ${number_of_children[i]} children?`);
    if(number_of_children[i]){
        info.number_of_children = children;
        break;
    }
}
for(let i=0;i<name.length;i++){
    let name1 = name[i];
    name[i] = confirm(`What is your partner name ${name[i]}?`);
    if(name[i]){
        info.name = name1;
        break;
    }
}
for(let i=0;i<profession.length;i++){
    let prof = profession[i];
    profession[i] = confirm(`What is your partner profession ${profession[i]}?`);
    if(profession[i]){
        info.profession = prof;
        break;
    }
}
for(let i=0;i<city.length;i++){
    let cit = city[i];
    city[i] = confirm(`What is your partner city ${city[i]}?`);
    if(city[i]){
        info.city = cit;
        break;
    }
}

let string = `You will marry ${info.name} and you will have ${info.number_of_children}
children. ” “You move to the city ${info.city} for the post ${info.profession}`
alert(string);
// function returnString(){
//     return string;
// }
console.log(info);
// console.log(i);
console.log(number_of_children);
// module.exports = Script;