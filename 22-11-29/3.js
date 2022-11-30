
let a = 3;
let b = 2;
let c = 2;
let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log("Хамгийн их тоо нь " + max + " бөгөөд хамгийн бага тоо нь " + min + " байна.")


if (a>b && a>c){
    console.log(a)
} else if (b>a && b>c){
    console.log(b)
} else if (c>a && c>b){
    console.log(c)
} else if (a==b || a==c || b==c){
    console.log("Aдил тоо байгаа тул Хамгийн их тоо байхгүй")
} else (console.log("Danger"));


if(a > b) {
    if(a > c)
}