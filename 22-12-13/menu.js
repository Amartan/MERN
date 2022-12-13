let menus = [{id:1, name:"home", href:""},
{id:2, name: "contact", href: "/"}]

let ulEl = document.createElement("ul")
let mainEL = document.getElementById("main");
for (i=0; i<menus.length; i++){
    let liE = document.createElement("li");
    let aE = document.createElement("a");
        aE.innerHTML = menus[i].name
        aE.href = menus[i].href
    liE.appendChild(aE);
    ulEl.appendChild(liE)
}

mainEL.appendChild(ulEl)