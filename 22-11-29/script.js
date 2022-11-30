//1

let i = 4; //true
let iii = 4; //false
let ii = 4; //true
let iv = 4;    //false
let v = 4 == 4;     //true
let vi = 4 === 4;   //true
let vii = 4 != 4;   //false
let iix = 4 !== 4;  //false
let ix = 4 != "4";  //false
let x = 4 == "4";   //true
let xi = 4 === "4"; //false


if (i > 3) {
    console.log(true)
} else {
    console.log(false)
};


if (iii < 3) {
    console.log(true)
} else {
    console.log(false)
};


if (ii >= 3) {
    console.log(true)
} else {
    console.log(false)
};

if (iv = 4 <= 3){
    console.log(true)
} else {
    console.log(false)
};

if (v = 4 == 4){
    console.log(true)
} else {
    console.log(false)
};

if (vi = 4 === 4){
    console.log(true)
} else {
    console.log(false)
};

if (vii = 4 != 4){
    console.log(true)
} else {
    console.log(false)
};

if (iix = 4 !== 4){
    console.log(true)
} else {
    console.log(false)
};

if (ix = 4 != "4"){
    console.log(true)
} else {
    console.log(false)
};

if (x = 4 == "4"){
    console.log(true)
} else {
    console.log(false)
};

if (xi = 4 === "4"){
    console.log(true)
} else {
    console.log(false)
};

//2
console.log("2")
let one = 4 > 3 && 10 < 12;         //true
let two = 4 > 3 && 10 > 12;         //false
let three = 4 > 3 || 10 < 12;       //true
let four = 4 > 3 || 10 > 12;        //true
let five = !(4 > 3);                //false
let six = !(4 < 3);                 //true
let eight = !(4 > 3 && 10 < 12);    //false
let nine = !(4 > 3 && 10 > 12);     //true
let ten = !(4 === "4");             //true

if (one = 4 > 3 && 10 < 12){
    console.log(true)
} else{ console.log(false)};

if (two = 4 > 3 && 10 > 12){
    console.log(true)
} else{ console.log(false)};

if (three = 4 > 3 || 10 < 12){
    console.log(true)
} else{ console.log(false)};

if (four = 4 > 3 || 10 > 12){
    console.log(true)
} else{ console.log(false)};

if (five = !(4 > 3)){
    console.log(true)
} else{ console.log(false)};

if (six = !(4 < 3)){
    console.log(true)
} else{ console.log(false)};

if (eight = !(4 > 3 && 10 < 12)){
    console.log(true)
} else{ console.log(false)};

if (nine = !(4 > 3 && 10 > 12)){
    console.log(true)
} else{ console.log(false)};

if (ten = !(4 === "4")){
    console.log(true)
} else{ console.log(false)};



//3
console.log("3");

let myAge=28;
let yourAge=99;

if (myAge>=yourAge){
    console.log("Сайн уу ахын дүү")
} else if (myAge<yourAge){
    console.log("Үхээгүй л байна уу")
};


//4
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
if (day= "Monday" || "Tuesday" || "Wednesday" || "Thursday"){
console.log("Fu*k") 
} else if (day= "Friday" || "Saturday" || "Sunday"){
    console.log("Yay!!!")
} else (console.log("Am i dead?"));

//5
let hours = 40
let ratePerHour = 28