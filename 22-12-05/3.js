let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


for (i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i].length);
}

for (i=0; i<itCompanies.length; i++){
    if (i == 0 || i == (itCompanies.length-1)/2 || i == itCompanies.length-1){
        console.log(itCompanies[i])
    }
};
for (i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i]);
};


let y="";
for (i=0; i<itCompanies.length; i++){
    y = y+ itCompanies[i] + " ";
};

console.log(`${y} зэрэг нь мэдээллийн технологийн томоохон компаниуд юм`);