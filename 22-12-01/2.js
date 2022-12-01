let text1 = "Hello World"
let text2 = "This is STRING"
let newStr1 = "";
let newStr2 = "";
i=0;
i1=0;

while (i<text1.length ){
    if(text1.charAt(i)==text1.charAt(i).toUpperCase()){
      newStr1 += text1.charAt(i).toLowerCase();
    } else {
        newStr1 += text1.charAt(i).toUpperCase();

        // text1.charAt(i).toUpperCase()}
    }
    i++;
};

while (i1<text2.length ){
    if(text2.charAt(i1)==text2.charAt(i1).toUpperCase()){
      newStr2 += text2.charAt(i1).toLowerCase();
    } else {
        newStr2 += text2.charAt(i1).toUpperCase();

        // text1.charAt(i).toUpperCase()}
    }
    i1++;
};

console.log(newStr1);
console.log(newStr2);

