let li0 = document.getElementsByTagName("li")[0];
console.log(li0);

let liLast = document.getElementsByTagName("ul");
console.log(liLast[0].lastElementChild);

// let eleId = document.getElementById
console.log(document.getElementById("aimag-315"))

let liAll = document.getElementsByTagName ("li");
console.log(liAll);
function textStyle(){
    for (i = 0; i < liAll.length; i++){
        liAll[i].style.fontSize = "30px";
        liAll[i].style.border = "solid 1px black";
        liAll[i].style.padding = "5px";
        liAll[i].style.margin = "5px";
        console.log(liAll[i])
    }
}

textStyle();

// let areaHangai = document.querySelectorAll('[name^="aimag-1"]')
// let areaHangai=[];
// let areaRight = [];
// let areaLeft = [];
// let areaCenter = [];

for (i=0; i< liAll.length; i++){
    if (liAll[i].id[6]==1){
        liAll[i].style.backgroundColor = "blue"
    } else if (liAll[i].id[6]==2){
        liAll[i].style.backgroundColor = "brown"
    } else if (liAll[i].id[6]==3){
        liAll[i].style.backgroundColor = "green"
    } else {liAll[i].style.backgroundColor = "orange"}
}
// console.log(areaHangai);
// for(i=0; i< liAll.length; i++){
//     areaHangai = areaHangai + getElementById(aimag-1);
//     areaRight = areaRight + get
// }

// function area (){

// }