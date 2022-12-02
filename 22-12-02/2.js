let n = prompt("Дуртай юм аа оруулна уу")
let pallenght = n.length;


// for (i = 0; i<pallenght; i++){
//     for(x = pallenght; x<=0; x--){
//         if(n[i]==n[x]){}
//     } esle (console.log("Its not a palodrone"))

// }

let i = 0;
let x = pallenght - 1;
while (i < pallenght || x >= 0) {
    if (n[i] == n[x]) {
        i++;
        x--;
        // if (i > x) {
        //     console.log("is a palodrone")
        // }
        console.log("is a palindrome");
    } else (console.log("Its not a palindrome")
    ); break;
};


/*
for (i = 0, x=pallenght-1; i < pallenght; i++, x--){

}
*/
