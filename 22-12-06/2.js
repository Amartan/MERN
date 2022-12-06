let tolbor = [3000, 27500, 100000];
let niitTolbor = [];
let additionalTolbor = [];
let averageTolbor = 0;
// let fullTolbor=0;
// let extraTolbor=0;
// let avgTolbor=0;

// for (i=0; i<tolbor.length; i++){
//     if (tolbor[i]>=5000 && tolbor[i]<=30000){
//         fullTolbor = tolbor[i]*1.15;
//         console.log(fullTolbor)
//     } else {fullTolbor = tolbor[i]*1.2;
//     console.log(fullTolbor)}
// }

// for (i=0; i<tolbor.length; i++){
//     if (tolbor[i]>=5000 && tolbor[i]<=30000){
//         extraTolbor = tolbor[i]*0.15;
//         console.log(extraTolbor)
//     } else {extraTolbor= tolbor[i]*1.2;
//     console.log(extraTolbor)}
// }

// for (i=0; i<tolbor.length; i++){
//     if (tolbor[i]>=5000 && tolbor[i]<=30000){
//         avgTolbor = avgTolbor + tolbor[i]*1.15;
//     } else {avgTolbor = avgTolbor + tolbor[i]*1.2};
// }

// function a(tolbor){
//     for (i=0; i<tolbor.length; i++){
//         if (tolbor[i]>=5000 && tolbor[i]<=30000){
//             fullTolbor = tolbor[i]*1.15;
//             console.log(fullTolbor)
//         } else {fullTolbor = tolbor[i]*1.2;
//         console.log(fullTolbor)}
//     }
// }



// avgTolbor = avgTolbor/tolbor.length;
// console.log(avgTolbor);

function fullTolbor(a){
    for (i=0; i<a.length; i++){
        if(a[i]>=5000 && a[i]<=30000){
            niitTolbor[i]=a[i]*1.15
        } else {niitTolbor[i]=a[i]*1.2}
    } return niitTolbor;
};


console.log(fullTolbor(tolbor))

function addTolbor(a){
    for (i=0; i<a.length; i++){
        if(a[i]>=5000 && a[i]<=30000){
            additionalTolbor[i]=a[i]*0.15
        } else {additionalTolbor[i]=a[i]*0.2}
    } return additionalTolbor;
};

console.log(addTolbor(tolbor));

function avgTolbor(a){
    for (i=0; i<a.length; i++){
        if(a[i]>=5000 && a[i]<=30000){
            niitTolbor[i]=a[i]*1.15
        } else {niitTolbor[i]=a[i]*1.2}
    };
    for (j=0; j<niitTolbor.length; j++){
        averageTolbor = averageTolbor + niitTolbor[j]
    } return averageTolbor/niitTolbor.length
}

console.log(avgTolbor(tolbor))