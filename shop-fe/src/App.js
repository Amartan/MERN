import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Test from "./components/test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Test />} />
          <Route path="/story" element={<h1>Here goes story</h1>} />
        </Route>
        <Route>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
