let too = prompt("Дурын тоо оруулна уу");
let first = "";
let second = "";


for (i=0; i<too; i++){
    first = first + " " + i;
};


console.log(first);

for (i=10; i>=too; i--){
    second = second +`\n ${i}`
};

console.log(second);