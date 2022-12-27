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

    }).catch(err=>console.log("dd"));
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

function fillCategory (){
    let cat= "";
    productsData.map((pro, index)=> {
        cat += `<p>${pro.category}</p>`
})
    category.innerHTML = cat;
}
