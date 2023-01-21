import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/head";
import Banner from "./components/banner";
import Trending from "./components/trending";
import Data from "./components/data";
import TrendingCard from "./components/trendingCard";

function App() {
  return (
    <div className="App">
      <Head />
      <Banner />
      <Trending/>
      <TrendingCard/>
      {/* <Data /> */}
    </div>
  );
}

export default App;
