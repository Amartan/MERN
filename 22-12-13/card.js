
let mainEL = document.getElementById("main");
let cardImg = document.createElement("img")
cardImg.src = "https://picsum.photos/300/250";
cardImg.style.borderRadius = "20px";

mainEL.style.width = "300px";
mainEL.style.display = "flex";
mainEL.style.flexDirection = "column";
mainEL.style.justifyContent = "center";
mainEL.style.alignItems = "center";
mainEL.style.border = "1px dotted black";
mainEL.style.borderRadius = "20px";
mainEL.style.margin = "20px";

let cardHead = document.createElement("h2");
cardHead.innerHTML = "Card Head";

let cardText = document.createElement("p");
cardText.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero illo corrupti assumenda labore autem placeat cumque eos eligendi magnam neque."

mainEL.appendChild(cardImg);
mainEL.appendChild(cardHead);
mainEL.appendChild(cardText);