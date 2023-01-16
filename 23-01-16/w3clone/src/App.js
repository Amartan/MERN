import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
import Sql from "./pages/sql";
import Python from "./pages/python";

function App() {
  return (
    <div className="App">
      <header>
        <navg
          class="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <i class="bi bi-house-fill text-secondary-emphasis"></i>
                <a class="navbar-brand" href="/">
                  HTML
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" aria-current="page" href="/css">
                  CSS
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" aria-current="page" href="/javascript">
                  JAVASCIPT
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" aria-current="page" href="/sql">
                  SQL
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" aria-current="page" href="/python">
                  PYTHON
                </a>
              </li>
            </ul>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
          </div>
        </navg>
      </header>
    </div>
  );
}

<div class="container-fluid" data-bs-theme="dark"></div>;
export default App;
