import React, { useEffect, useState } from "react";
import EditModal from "./editModal";
import editModal from "./editModal";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  // const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState("Guest");
  const [userImg, setUserImg] = useState("");
  const [userRank, setUserRank] = useState(0);
  const [pword, setPword] = useState("12345678");

  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");

  const [loading, setLoading] = useState(false);
  const [productItem, setProductItem] = useState();

  const userTypes = ["guest", "noob", "shinekov", "pro", "kulkaz"];

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch("http://localhost:8000/api/user")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data.result);
      });
  };
  // Зураг нэмэх
  const sendFIle = async (fieldName, files) => {
    setLoading(true);
    console.log(files);
    const cloudinaryName = "dbvz2grpk";
    const url = `htps://api.cloudinary.com/v1_1/${cloudinaryName}/upload`;
    const newArr = [];
    for (let i = 0; i < files[0].length; i++) {
      newArr.push(files[0][i]);
    }

    const promise = await Promise.all(
      newArr.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", 625346339988351);
        formData.append("folder", "ShopImages");
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

  // const getCategory = () => {
  //   fetch("http://localhost:8000/api/category")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.result);
  //       data.result.map((e) => {
  //         categories.push(e.categoryName);
  //       });
  //       console.log(categories);
  //       // setCategories(data.result);
  //     });
  // };

  const onSave = (e) => {
    e.preventDefault();

    const newUser = {
      // userName: userName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      userType: userType,
      userImg: userImg,
      userRank: userRank,
      pword: pword,
    };

    fetch("http://localhost:8000/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newUser,
        // productName: productName,
        // category: category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.result);

        clearData();
      });
  };

  const clearData = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setUserType("Guest");
    setUserImg("");
    setUserRank(0);
    setPword("");
  };

  const onEdit = (id) => {
    setEditModal(!editModal);
    setEditId(id);
  };

  const onDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:8000/api/user/${id}`, {
      method: "DELETE",
      // headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setUsers(data.result);
      })
      .catch((err) => console.log(err));
  };

  // const onUpdate = (editId, productName, category, isSpecial) => {
  //   // e.preventDefault();
  //   console.log(editId, productName, category, isSpecial);
  //   const newUser = {
  //     productName,
  //     category,
  //     isSpecial,
  //   };

  //   fetch(`http://localhost:8000/api/user/${editId}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newUser),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.result);
  //       setEditModal(false);
  //       setUsers(data.result);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 p-4">
          <form>
            <div className="mb-3">
              <label className="form-label"> e-mail</label>
              <input
                type={"text"}
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> First Name</label>
              <input
                type={"text"}
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> Last Name</label>
              <input
                type={"text"}
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> User Type</label>
              <select
                value={userType}
                className="form-control"
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value={0}>Select</option>
                {userTypes.map((item, index) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label"> User Img</label>
              <input
                type={"file"}
                // accept="image/*"
                className="form-control"
                // value={lastName}
                onChange={(e) => {
                  console.log(e.target.files);
                  const arr1 = [];
                  arr1.push(e.target.files);
                  sendFIle("userImg", arr1);
                }}
                // onChange={(e) => setUserImg(e.target.value)
              />
              {loading ? <div>Loading...</div> : ""}
            </div>
            <div className="mb-3">
              <label className="form-label"> User Rank</label>
              <input
                type={"number"}
                className="form-control"
                value={userRank}
                onChange={(e) => setUserRank(e.target.value)}
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
                <th>email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>userType</th>
                <th>userImg</th>
                <th>userRank</th>
              </thead>
              <tbody>
                {users.map(
                  ({
                    id,
                    email,
                    firstName,
                    lastName,
                    userType,
                    userImg,
                    userRank,
                  }) => {
                    //newdate = > date format

                    return (
                      <tr>
                        <td>{id}</td>
                        <td>{email}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{userType}</td>
                        <td>{userImg}</td>
                        <td>{userRank}</td>
                        {/* <td>{userRank ? "Yes" : "No"}</td> */}

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
            // onUpdate={onUpdate}
          />
        )}
      </div>
    </div>
  );
}
