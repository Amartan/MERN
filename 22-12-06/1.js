let ran = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let odd = 0;
let even = 0;

// for (i=0; i<ran.length; i++){
//     if (ran[i] % 2 == 0){
//         even ++
//     } else {odd++}
// };

// console.log(odd, even);

function countOdd (a){
    for(i=0; i<a.length; i++){
        if (a[i]%2==0){
            even++
        } else { odd++}
    } console.log(`Өгөгдсөн дараалалд тэгш тоо ${even}, сондгой тоо ${odd} байна.`)
}

countOdd(ran);