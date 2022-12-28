let productsData = [];
let products = document.getElementById("products")
let category = document.getElementById("category")

function getData () {
    fetch('https://dummyjson.com/products')
    .then(response => {return response.json()})
    .then((data)=>{
        console.log(data);

        productsData = [...data.products];

        drawHTML();
        fillCategory()

        // data.products

    }).catch(err=>console.log("error"));
}


getData();

function drawHTML () {
let row = "";
    productsData.map((pro, index)=> {
        row += `<div class="card" style="width: 18rem;">
                    <img src="${pro.images[0]}" class="card-img-top" style="width:200px; height:200px">
                    <div class="card-body">
                        <h5 class="card-title">${pro.title}</h5>
                        <p class="card-text">${pro.description} </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
                    
        console.log(pro);
        // console.log(index);
        // console.log(pro.id);
    })

    products.innerHTML = row;
}

// function fillCategory (){
//     let cat= "";
//     let catList = "";
//     productsData.map((pro, index)=> {
//         cat += `<p> ${pro.category}</p>`
//     })
//     console.log(cat)
//     category.innerHTML = cat;
// }

function fillCategory (){
    console.log(productsData[1].category)
    let cat= [];
    let catList = [];
    for (i=0; i<productsData.length; i++){
        cat[i] = productsData[i].category
        // console.log(cat[i])
    }
    catList = [...new Set(cat)]
    let list = ""
    for(i=0; i<catList.length; i++){
        list += `<p> ${catList[i]}</p>`
    }
    category.innerHTML = list
    // category.innerHTML = cat;
}
