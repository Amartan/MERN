import React, { useState, useEffect } from "react";
import "./Modal.css";

export default function EditModal({ closeModal, editId }) {
  const [productName, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [isSpecial, setIsSpecial] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  console.log(editId);
  useEffect(() => {
    getData();
    getCategory();
  }, []);

  let temp = [];
  const getData = () => {
    fetch(`http://localhost:8000/api/product/${editId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setProducts(data.result);
      });
  };
  const getCategory = () => {
    fetch("http://localhost:8000/api/category")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        data.result.map((e) => {
          temp.push(e.categoryName);
        });
        setCategories(temp);
      });
  };

  const onUpdate = (productName, category, isSpecial) => {
    // e.preventDefault();

    // const newPro = {
    //   productName: productName,
    //   category: category,
    //   isSpecial: isSpecial,
    // };

    fetch(`http://localhost:8000/api/product${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // ...newPro,
        productName: productName,
        category: category,
        isSpecial: isSpecial,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        // setProducts(data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal-background">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                value={productName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> category</label>
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
              {/* <label className="form-label">Category</label>
              <input
                className="form-control"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              /> */}
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
          </div>
          <div className="modal-footer">
            <button onClick={() => onUpdate(productName, category, isSpecial)}>
              Continue
            </button>
            <button onClick={() => closeModal(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
