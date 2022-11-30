let year = prompt("Одоо хэдэн он бэ?");
let mounth = prompt("Хэдэн сар билээ?");
let day = prompt("Ухаантай залуу юмаа. Аягүй бол хэдэн гэдгийг мэдэж байгаа даа?");


let formalMounth = mounth.length == 1 ? "0" + mounth : mounth;
let formalDay = day.length == 1 ? "0" + day : day;
formalMounth = Number(formalMounth);
formalDay = Number(formalDay);
let formalYear = Number(year);

if (Number.isInteger(formalMounth)==true && Number.isInteger(formalDay)==true && Number.isInteger(formalYear)==true) {
    if (formalMounth >12){
        console.log("Jild 12 sard baidag shvv.")
    } else if (formalDay >31){
        console.log("Ali ch sar 31ees baga honogtoi baidag shvv.")
    } else { console.log(`Onoodor ${formalYear}-${formalMounth}-${formalDay}`)}
} else {console.log("Bvhel too oruulna uu")};


//akjdlkf
/*


*/
