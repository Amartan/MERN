let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

let trimmed3 = [];
let trimmedLast = [];

for (i=0; i<3; i++){
    trimmed3[i]=itCompanies[i];
};
console.log(trimmed3);


for (i=trimmedLast.length; i>trimmedLast.length-3; i--){
    trimmedLast[i]=itCompanies[i];
};
console.log(trimmedLast);