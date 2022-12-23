// fetch("https://randomuser.me/api/")
// .then(res=> res.json())
// .then((data)=>console.log(data));

// let person = fetch("https://randomuser.me/api/")
// .then(res=> res.json())
// .then((data)=>console.log(data));

// console.log(person)
// let name = person



async function fetchPerson () {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.text();
    let name = await response.
    console.log(name)
    console.log(data);
    
}

fetchPerson()