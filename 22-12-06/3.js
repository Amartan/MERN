let arr=[4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
// let sortedArr = "";

// function sor(a){
//     for(i=0; i< a.lenght; i++){
//         let target = a.lenght[i];
//         for(j=i-1; j>=0 && a[j]> target; j--){
//             a[j+1] = a[j];
//             }
//         a[j+1] = target
//         }
//         console.log(a);
//     }

// sor(arr);
sorterArr = arr.sort((a, b) => b-a);
console.log(sorterArr)