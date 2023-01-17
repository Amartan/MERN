import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/head";
import Banner from "./components/banner";
import Data from "./components/data";

function App() {
  return (
    <div className="App">
      <Head />
      <Banner />
      <Data />
    </div>
  );
}

export default App;
