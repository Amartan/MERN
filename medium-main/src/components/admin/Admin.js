import React from "react";
import { useState, useEffect } from "react";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";

export default function Admin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://192.168.1.50:4040/news")
      .then((response) => response.json())
      .then((dt) => {
        console.log(dt.news);
        setData(dt.news);
      });
  }, []);

  return (
    <div>
      <div className="navbar bg-dark flex-nowrap">
        <a href="#" className="col-md-3 navbar-brand text-light">
          Company Name
        </a>
        <input type="text" className="w-100 form-control bg-dark border-0" />
        <div className="nav text-nowrap">
          <span className="text-light">Log Out</span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="com-md-3">
            <div className="nav bg-light flex-column">
              <div className="nav-item">
                <a className="nav-link">Dashboard</a>
              </div>
              <div className="nav-item">
                <a className="nav-link">News</a>
              </div>
              <div className="nav-item">
                <a className="nav-link">Users</a>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row my-4"></div>
            <div className="row p-3">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <th>№</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Body</th>
                  </thead>
                  <tbody>
                    {data.map(({ _id, title, isTrending, category }, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{title}</td>
                          <td>{category}</td>
                          <td>
                            {isTrending ? (
                              <span className="badge badge-success">yes</span>
                            ) : (
                              <span className="badge badge-success">no</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
