import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/head";
import Banner from "./components/banner";
import Trending from "./components/trending";
import Data from "./components/data";
import TrendingCard from "./components/trendingCard";
import Body from "./components/body";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div>
      <div className="App">
        <Head />
        <Banner />
        <Trending />
        <TrendingCard />
        {/* <Data /> */}
        <hr />
        <Body />
      </div>
      <div>
        {/* <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
