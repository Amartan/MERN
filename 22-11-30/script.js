let firstName = "Amarbayasgalan";
let lastName = "Tsooj";
let city = "Ulaanbaatar";
let district = "Bayangol";
let age = 28;
let job = "..."

if (firstName.length > lastName.length){
    console.log("ner n urt baina")
} else if (firstName.length == lastName.length) {
    console.log("Ovog nernii urt tentsvv baina")
}else (console.log("ovog n urt baina"));

let upperFirstName = firstName.toUpperCase();
let upperLastName = lastName.toUpperCase();

console.log("Tanii neriig tomoor bichwel", upperFirstName, upperLastName, "bolno.")

let lowerFirstName = firstName.toLowerCase();
let lowerLastName = lastName.toLowerCase();

console.log("Tanii neriig jijgeer bichwel", lowerFirstName, lowerLastName, "bolno.")

let all = firstName.concat(" ", lastName);
console.log("Tanii bvten ner", all, "ym baina.");

let academy = "Pinecone academy";
let slogan = "leap hotolbort tawtai morilno uu"
let acaSlo = academy.concat(" ", slogan);
console.log(acaSlo);

console.log(`Sain baina uu. Minii neriig ${firstName + " " + lastName} gedeg. Bi ${city} hotod amdardag. Bi ${age} nastai, ${job} ajil hiideg.`)

console.log("1 2 3 4 5 \n2 3 4 5 1  \n3 4 5 1 2 \n4 5 1 2 3 \n5 1 2 3 4")

/*
let a = prompt("Duriin too oruulna uu");

let len = a.length == 1 ? "0" + a : a;

console.log(len);
*/