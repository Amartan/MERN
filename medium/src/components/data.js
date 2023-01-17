import React from "react";

export default function Data() {
  fetch(
    "https://newsdata.io/api/1/news?apikey=pub_157452d7121e9393ebc4eedcc98c355efb6f8&q=breaking%20news "
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  return data.product.map(
    (
      { category, creator, description, keywords, title, image_url, pubDate },
      index
    ) => {
      <div>
        <tr>
          <td>{index + 1}</td>
          <td>{title}</td>
          <td>{description}</td>
        </tr>
      </div>;
    }
  );
}
//
// let row ="";
// fetch("http://192.168.1.198:4040/product")
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);

//     data.product.map(
//         ({_id, category, description, price, isSpecial }, index) => {

//     row = `<tr>
//             <td>${index+1}</td>
//             <td>${title}</td>
//             <td>${price}</td>
//             <td>${description}</td>
//             <td>
//                 ${isSpecial ? "Тийм" : "Үгүй"}</td>
//             <td>
//             <a href = "./productNew.html?id=${_id}" class="btn btn-secondary">Засах</a>
//             <a onclick="deleteProduct('${_id}') " class= "btn bg-dander text-light">Устгах</a>
//             </td>
//         </tr>`;

//         table.innerHTML += row;
//         }
//     );
// })
// .catch((err) => console.log(err));
