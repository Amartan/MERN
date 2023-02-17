import React, { useEffect, useState } from "react";
import EditModal from "./editModal";
import axios from "axios";

export default function Product() {
  const [productName, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [categories, setCategories] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [brands, setBrands] = useState([]);
  const [isSpecial, setIsSpecial] = useState(false);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [thumbImg, setThumbImg] = useState("");
  const [slideImg, setSlideImg] = useState([]);
  const [products, setProducts] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");

  const [loading, setLoading] = useState(false);
  const [productItem, setProductItem] = useState();
  // const categories = [];
  // const categories = ["Clothes", "Food", "Shoes"];

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const getData = () => {
    fetch("http://localhost:8000/api/product")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.result);
      });
  };

  const getCategory = () => {
    fetch("http://localhost:8000/api/category")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        data.result.map((e) => {
          categories.push(e.categoryName);
        });
        console.log(categories);
        // setCategories(data.result);
      });
  };

  const onSave = (e) => {
    e.preventDefault();

    const newPro = {
      productName: productName,
      category: category,
      isSpecial: isSpecial,
    };

    fetch("http://localhost:8000/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newPro,
        productName: productName,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.result);

        clearData();
      });
  };

  const clearData = () => {
    setName("");
    setCategory(0);
    setIsSpecial(false);
  };

  const onEdit = (id) => {
    setEditModal(!editModal);
    setEditId(id);
  };

  const onDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:8000/api/product/${id}`, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProducts(data.result);
      })
      .catch((err) => console.log(err));
  };

  const onUpdate = (
    editId,
    productName,
    category,
    brandName,
    isSpecial,
    price,
    quantity,
    thumbImg,
    slideImg
  ) => {
    // e.preventDefault();
    console.log(
      editId,
      productName,
      category,
      brandName,
      isSpecial,
      price,
      quantity,
      thumbImg,
      slideImg
    );
    const newPro = {
      productName,
      category,
      brandName,
      isSpecial,
      price,
      quantity,
      thumbImg,
      slideImg,
    };

    fetch(`http://localhost:8000/api/product/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPro),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setEditModal(false);
        setProducts(data.result);
      })
      .catch((err) => console.log(err));
  };

  // Зураг нэмэх
  const sendFIle = async (fieldName, files) => {
    setLoading(true);
    console.log(files);
    // const cloudinaryName = "dbvz2grpk";
    const url = `https://api.cloudinary.com/v1_1/dbvz2grpk/upload`;
    const newArr = [];
    for (let i = 0; i < files[0].length; i++) {
      newArr.push(files[0][i]);
    }

    const promise = await Promise.all(
      newArr.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", 625346339988351);
        formData.append("folder", "ProductImages");
        formData.append("upload_preset", "japlowjs");

        return axios.post(url, formData);
      })
    );

    console.log(promise);

    const arr = [];

    promise.map((res) => {
      arr.push(res.data.secure_url);
    });

    if (fieldName == "userImg") {
      setProductItem({
        ...productItem,
        userImg: arr,
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 p-4">
          <form>
            <div className="mb-3">
              <label className="form-label"> Name</label>
              <input
                type={"text"}
                className="form-control"
                value={productName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> Category</label>
              <select
                value={category}
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={0}>Select</option>
                {categories.map((item, index) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label"> isSpecial?</label>

              <input
                type={"checkbox"}
                value={isSpecial}
                className="form-check"
                onChange={(e) => setIsSpecial(e.target.checked)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label"> Select Brand</label>
              <select
                value={brandName}
                className="form-control"
                onChange={(e) => setBrandName(e.target.value)}
              >
                <option value={0}>Select</option>
                {brands.map((item, index) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label"> Price</label>
              <input
                type={"number"}
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label"> Quantity</label>
              <input
                type={"number"}
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label"> Thumb Img</label>
              <input
                type={"file"}
                // accept="image/*"
                className="form-control"
                onChange={(e) => {
                  console.log(e.target.files);
                  const arr1 = [];
                  arr1.push(e.target.files);
                  sendFIle("thumbImg", arr1);
                }}
                // onChange={(e) => setUserImg(e.target.value)
              />
              {loading ? <div>Loading...</div> : ""}
            </div>

            <div className="mb-3">
              <label className="form-label"> Slide Img</label>
              <input
                type={"file"}
                // accept="image/*"
                className="form-control"
                onChange={(e) => {
                  console.log(e.target.files);
                  const arr1 = [];
                  arr1.push(e.target.files);
                  sendFIle("slideImg", arr1);
                }}
                // onChange={(e) => setUserImg(e.target.value)
              />
              {loading ? <div>Loading...</div> : ""}
            </div>
            <div className="mb-3">
              <button onClick={onSave} className="btn btn-primary">
                Save
              </button>
              <button
                // onClick={onUpdate}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <th>Name</th>
                <th>category</th>
                <th>Brand</th>
                <th>Special</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Img</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {products.map(
                  ({
                    id,
                    productName,
                    category,
                    brandName,
                    isSpecial,
                    price,
                    quantity,
                    thumbimg,
                  }) => {
                    //newdate = > date format

                    return (
                      <tr>
                        <td>{productName}</td>
                        <td>{category}</td>
                        <td>{brandName}</td>
                        <td>{isSpecial ? "Yes" : "No"}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td>{thumbimg}</td>
                        <td>
                          <button onClick={() => onEdit(id)}>Edit</button>
                        </td>
                        <td>
                          <button onClick={() => onDelete(id)}>Delete</button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
        {editModal && (
          <EditModal
            editId={editId}
            closeModal={() => setEditModal()}
            onUpdate={onUpdate}
          />
        )}
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// export default function Users() {
//   const [productName, setName] = useState("");
//   const [category, setCategory] = useState(0);
//   const [isSpecial, setIsSpecial] = useState(false);

//   const [products, setProducts] = useState([]);

//   const categories = ["Clothes", "Food", "Shoes"];

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     fetch("http://localhost:8000/api/product")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data.result);
//       });
//   };

//   const onSave = (e) => {
//     e.preventDefault();

//     const newPro = {
//       productName: productName,
//       category: category,
//       isSpecial: isSpecial,
//     };

//     fetch("http://localhost:8000/api/product", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...newPro,
//         productName: productName,
//         category: category,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data.result);

//         clearData();
//       });
//   };

//   const clearData = () => {
//     setName("");
//     setCategory(0);
//     setIsSpecial(false);
//   };

//   const onUpdate = (e) => {
//     e.preventDefault();
//     const newArr = products.map((item, index) => {
//       if (index == 0) {
//         const newObj = { ...item, productName: "KKKK" };

//         return newObj;
//       } else {
//         return item;
//       }
//     });

//     setProducts(newArr);
//   };
//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-4 p-4">
//           <form>
//             <div className="mb-3">
//               <label className="form-label"> Name</label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 value={productName}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label"> category</label>
//               <select
//                 value={category}
//                 className="form-control"
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value={0}>Select</option>
//                 {categories.map((item, index) => (
//                   <option value={item}>{item}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label"> isSpecial?</label>

//               <input
//                 type={"checkbox"}
//                 value={isSpecial}
//                 className="form-check"
//                 onChange={(e) => setIsSpecial(e.target.checked)}
//               />
//             </div>
//             <div className="mb-3">
//               <button onClick={onSave} className="btn btn-primary">
//                 Save
//               </button>
//               <button onClick={onUpdate} className="btn btn-primary">
//                 Update
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-12">
//           <div className="table-responsive">
//             <table className="table">
//               <thead>
//                 <th>id</th>
//                 <th>Name</th>
//                 <th>category</th>
//                 <th>Special</th>
//               </thead>
//               <tbody>
//                 {products.map(({ id, productName, category, isSpecial }) => {
//                   //newdate = > date format

//                   return (
//                     <tr>
//                       <td>{id}</td>
//                       <td>{productName}</td>
//                       <td>{category}</td>
//                       <td>{isSpecial ? "Yes" : "No"}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
