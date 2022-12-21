let products = [
    { productId: 1, productName: "Цүнх", shop_id: 1, category: 3 },
    { productId: 2, productName: "Гутал", shop_id: 2, category: 1 },
    { productId: 3, productName: "Хар цамц", shop_id: 1, category: 1 },
    { productId: 4, productName: "Будаа агшаагч", shop_id: 1, category: 2 },
    { productId: 5, productName: "Хутга", shop_id: 2, category: 2 },
    { productId: 6, productName: "Аяга", shop_id: 1, category: 2 },
  ];
  
  let shops = [
    { id: 1, name: "Номин" },
    { id: 2, name: "Улаанбаатар" },
    { id: 3, name: "Сансар" },
  ];
  
  // Эхлээд тухайн нэг барааны мэдээлэл харуулах
  // Сонгосон барааны дэлгүүрийн мэдээллийг харуулах
  // Тухайн дэлгүүрээс нэг ангилалд байгаа бусад барааг харуулах
  //category - Хувцас -1, Гэр ахуйн бараа -2, Хэрэглээ - 3


  //Бараа мэдээлэл
let baraa = prompt("Хайж буй барааны id-гаа оруулна уу");
baraa = Number(baraa)
let showBaraa
for(i=0; i<products.length; i++){
  if (products[i].productId == baraa)
    {showBaraa = products[i]}
}

console.log(showBaraa)

//Дэлгүүрийн мэдээлэл
let showShop
for (i=0; i<shops.length; i++){
    if (showBaraa.shop_id == shops[i].id){
        showShop = shops[i]
    }
}

console.log(showShop)

//Ижил барааны мэдээлэл
let simularBaraa = {};
let y=0
for(i=0; i<products.length; i++){
    if(showBaraa.category == products[i].category){
        simularBaraa[y]=products[i]
        y++
    }
}

console.log(simularBaraa)