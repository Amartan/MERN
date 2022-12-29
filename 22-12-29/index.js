let table = document.getElementById("productList")


getData();

function getData(){
    let row ="";
    fetch("http://192.168.1.198:4040/product")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        data.product.map(
            ({_id, category, description, price, isSpecial }, index) => {

        row = `<tr>
                <td>${index+1}</td>
                <td>${title}</td>
                <td>${price}</td>
                <td>${description}</td>
                <td>
                    ${isSpecial ? "Тийм" : "Үгүй"}</td>
                <td>
                <a href = "./productNew.html?id=${_id}" class="btn btn-secondary">Засах</a>
                <a onclick="deleteProduct('${_id}') " class= "btn bg-dander text-light">Устгах</a>
                </td> 
            </tr>`;

            table.innerHTML += row;
            }
        );
    })
    .catch((err) => console.log(err));
}