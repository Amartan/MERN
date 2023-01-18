import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";

export default function Header() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}
