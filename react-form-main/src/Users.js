import React, { useEffect, useState } from "react";
import EditModal from "./editModal";
import editModal from "./editModal";

export default function Users() {
  const [productName, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [isSpecial, setIsSpecial] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");

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
    console.log(id);
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
                <th>id</th>
                <th>Name</th>
                <th>category</th>
                <th>Special</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {products.map(({ id, productName, category, isSpecial }) => {
                  //newdate = > date format

                  return (
                    <tr>
                      <td>{id}</td>
                      <td>{productName}</td>
                      <td>{category}</td>
                      <td>{isSpecial ? "Yes" : "No"}</td>
                      <td>
                        <button onClick={() => onEdit(id)}>Edit</button>
                      </td>
                      <td>
                        <button onClick={() => onDelete(id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {editModal && <EditModal editId = {editId} closeModal={() => setEditModal()} />}
      </div>
    </div>
  );
}
