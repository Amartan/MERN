let too = prompt("Дурын тоо оруулна уу");
let first = [];
let second = [];

for (i=0; i<too; i++){
    first[i] = Number(1+i)
    console.log(`${first} \n`)
};


for (i=too; i>0; i--){
    for(y=0; y<i; y++){
        second[y] = too-y;
    };
    console.log(`${second} \n`)
};



// for (i=0; i<too; i++){
//     for(y=too; y>i; y--){
//         second
//     }
// }

// i=too;
// let y=0;

// while (i>0){
//     while (y<i){
//         second[y]= too-y
//         y++
//     }
//     i--
//     console.log(second)
// }