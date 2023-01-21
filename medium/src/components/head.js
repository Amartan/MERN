import React from "react";

export default function Head() {
  return (
    <div>
      <nav className="navbar"> 
        <div className="container-fluid head">
          <a className="navbar-brand" href="#">
            <img
              src={require("../pic/2.png")}
              alt="Logo"
              width="161.47"
              height="25"
              className="d-inline-block align-text-top"
            />
          </a>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#" />
              Our story
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" />
              Membership
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" />
              Write
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" />
              Sign in
            </li>
            <li className="nav-item">
              <button className="get-started">Get started</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
