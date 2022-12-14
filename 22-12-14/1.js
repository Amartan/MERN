let date = new Date();
let ongoo = `on-sar-odor: ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

let miniCont = document.getElementsByClassName("miniContainer")
miniCont[0].style.display = "flex";

document.getElementById("ogno").innerHTML = ongoo;

let rem = document.getElementById("remaining");

// let newTask = getElementById("new-task");
// let taskPlus = getElementById("task-nemeh");

function addTask (){
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.style.backgroundColor = "#fff"
    let liDiv = document.createElement("div")
    liDiv.style.display = "flex"

    let liDivText = document.createElement("p")
    liDivText.innerHTML = document.getElementById("myInput").value;


    let liDivEdit = document.createElement("button")
    liDivEdit.innerHTML = "&#9998"
    liDivEdit.addEventListener("click", function (){
        
        liDivText.setAttribute("type", "input")
        // liDivText.inputMode = "text"
    })

    let liDivDone = document.createElement("button")
    liDivDone.innerHTML = "&#10003"
    liDivDone.addEventListener("click", function(){
        
        li.style.backgroundColor = "#999"})
    // liDivDone.addEventListener("click", function(){
    //     if(li.style.backgroundColor == "#fff"){
    //     li.style.backgroundColor = "#999"
    //     } else {li.style.backgroundColor = "#fff"}
    // })

    let liDivDel = document.createElement("button")
    liDivDel.innerHTML = "ustgah"
    liDivDel.addEventListener("click", function() {
        li.remove();
    })




    liDiv.appendChild(liDivText)
    liDiv.appendChild(liDivEdit)
    liDiv.appendChild(liDivDone)
    liDiv.appendChild(liDivDel)
    li.appendChild(liDiv)
    list.appendChild(li);
}

// let selfDestruct = getElementById

