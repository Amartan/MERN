//Багийн дундаж оноог олох

let a = (96 + 108 + 89) / 3;
let b = (88 + 91 + 110) / 3;

/*
if(a>b && a>100){console.log("A team win")
}else if (b>a && b>100){console.log("B team win")
}else (console.log("Draw"));
*/

if (a >= 100 || b >= 100) {
    if (a > b) {
        console.log("A team win")
    } else if (b > a) {
        console.log("B team win")
    } else (console.log("Draw"))
}else console.log("2 суга баг байна.");