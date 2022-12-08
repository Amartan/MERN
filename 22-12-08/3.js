let students = [
    {
        name:   "Gonchigsumlai", 
        birthYear : 1999,
        hobby : "Horse",
        single : false
    },
    {   name: "Taaldaa",
        birthYear : 2000,
        hobby : "sleep",
        single : true
    },
    {   name: "Darga",
        birthYear : 2004,
        hobby : "sing",
        single : false
    },
    {   name: "Huslen",
        birthYear : 2002,
        hobby : "soccer",
        single : false
    },
    {   name:  "Orgil", 
        birthYear : 2002,
        hobby : "sleep",
        single : false
    },
    {   name: "Amaraa2",
        birthYear : 2005,
        hobby : "watching anime",
        single : true
    },
    {   name: "Manlai",
        birthYear : 1999,
        hobby : "playing ukulele",
        single : true
    },
    {   name: "Byamba",
        birthYear : 1990,
        hobby : "accounting",
        single : false
    },
    {   name: "Taami",
        birthYear : 1999,
        hobby : "playing dota",
        single : false
    },
    {   name: "Ganzoo",
        birthYear : 2004,
        hobby : "watching anime",
        single : true
    },
    {   name: "Daria",
        birthYear : 2004,
        hobby : "reading",
        single : true
    },
    {   name: "jack",
        birthYear : 1999,
        hobby : "chase",
        single : false
    },
    {   name: "bebe",
        birthYear : 2004,
        hobby : "sportmen ",
        single : true 
    },
    {   name: "Amaraa1",
        birthYear : 1994,
        hobby : "making money",
        single : false
    },
    {   name: "Dulguun",
        birthYear : 1997,
        hobby : "singing ",
        single : false
    },
    {   name: "Naadoo",
        birthYear : 1997,
        hobby : "reading book",
        single : true 
    },
    {   name: "Bilguun",
        birthYear : 1995,
        hobby : "taking pic",
        single : false
    },
    {   name: "Muugii",
        birthYear : 1997,
        hobby : "soccer",
        single : true
    },
    {   name: "Oochka",
        birthYear : 1997,
        hobby : "sleeping",
        single : false
    },
    {   name: "Taivanaa",
        birthYear : 2003,
        hobby : "drawing",
        single : true
    },
    {   name: "Niko",
        birthYear : 1993,
        hobby : "playing com game",
        single : false
}
];

console.log(students.length)

let olderThan20 = [];
let filteredOlderThan20 = [];

function age20(){
    for (i=0; i<students.length; i++){
        if (students[i].birthYear<=2002){
            olderThan20[i]=students[i].name;
        }
    }
    filteredOlderThan20 = olderThan20.filter(elm => elm);
    return filteredOlderThan20;

};

age20();
console.log(filteredOlderThan20);


let date = new Date()

console.log( date.getFullYear())

function studentAge(){
    for( i=0; i<students.length; i++){
        // ages[i].name = students[i].name;
        students[i].nas = Number(date.getFullYear() - students[i].birthYear);
    }
    return students;
};

studentAge();
console.log(students)



// let ages = "";
// console.log(students[1].name)

// function studentAge(){
//     for( i=0; i<students.length; i++){
//         ages = ages + students[i].name + Number(getFullYear() - students[i].birthYear);
//     }
//     return ages;
// };

// studentAge();
// console.log(ages)