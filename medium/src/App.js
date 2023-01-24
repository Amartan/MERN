import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/head";
import Banner from "./components/banner";
import Trending from "./components/trending";
import Data from "./components/data";
import TrendingCard from "./components/trendingCard";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <Head />
      <Banner />
      <Trending />
      <TrendingCard />
      {/* <Data /> */}
      <hr/>
      <Body />
    </div>
  );
}

export default App;
