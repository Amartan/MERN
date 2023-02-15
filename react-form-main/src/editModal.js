import React, { useState, useEffect } from "react";
import "./Modal.css";

export default function EditModal({ closeModal, editId, onUpdate }) {
  const [productName, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [isSpecial, setIsSpecial] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // console.log(editId);
  useEffect(() => {
    getData();
    getCategory();
    // onUpdate();
  }, []);

  let temp = [];
  const getData = () => {
    fetch(`http://localhost:8000/api/product/${editId}`)
      .then((res) => res.json())
      .then(({ result }) => {
        setName(result[0].productName);
        setCategory(result[0].category);
        setIsSpecial(result[0].isSpecial);
        console.log(result);
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

  // const onUpdate = (e) => {
  //   // e.preventDefault();

  //   const newPro = {
  //     productName: productName,
  //     category: category,
  //     isSpecial: isSpecial,
  //   };

  //   fetch(`http://localhost:8000/api/product/${editId}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       ...newPro,
  //       productName: productName,
  //       category: category,
  //       isSpecial: isSpecial,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.result);
  //       closeModal(false);
  //       setProducts(data.result);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
                // defaultValue={productName}
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
            <button
              onClick={() => onUpdate(editId, productName, category, isSpecial)}
            >
              Continue
            </button>
            <button onClick={() => closeModal(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
