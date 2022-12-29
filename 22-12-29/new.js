let btnEl = document.getElementById("btn");
let titleEl = document.getElementById("title");
let catEl = document.getElementById("category");
let priceEl = document.getElementById("price");
let fileEl = document.getElementById("image");

let radio = document.getElementsByName('isSpecial');
let checkMul = document.getElementsByName('')

btnEl.addEventListener("click", onSave);

event.preventDefault();

  let ispe = false;
  let daysStr = "";

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      ispe = radio[i].value == "yes" ? true : false;
    }
  }

  for (let i = 0; i < checkMul.length; i++) {
    if (checkMul[i].checked) {
      console.log(checkMul[i].value);
      daysStr += checkMul[i].value + ",";
    }
  }

  console.log(daysStr);

  fetch("http://localhost:4040/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleEl.value,
      category: catEl.value,
      price: priceEL.value,
      image: "test",
      isSpecial: ispe,
      days: daysStr,
    }),
  });