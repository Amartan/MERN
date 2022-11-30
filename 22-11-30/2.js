let number = prompt("Утасны дугаараа оруулна уу?");
let numNumber = Number(number);
let operNumber = number.substring(0, 2);

console.log(Number.isInteger(numNumber))
console.log(numNumber.length)

if (Number.isInteger(numNumber) && number.length==8){
    if (operNumber == 99 || operNumber ==95 || operNumber == 94 || operNumber == 85){
        console.log("Your phone operator is Mobicom")
    } else if (operNumber == 88 || operNumber == 86 || operNumber == 80){
        console.log("Your phone operator is Unitel")
    } else if (operNumber == 96 || operNumber == 91) {
        console.log("Your phone operator is Skytel")
    } else (console.log("You have unregistered operator"))
} else if (Number.isInteger(numNumber)&& number.length!==8){
    console.log ("Утасны дугаараа зөв оруулна уу")
} else (console.log("Thas is not a number"));