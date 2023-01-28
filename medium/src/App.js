import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Head from "./components/head";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div>
      <div className="App">
        {/* <Head />
        <Trending />
        <hr />
        <Body /> */}
        <Routes>  
          <Route>
            <Route path="/" element={<Head/>}></Route>
            <Route path="/story" element={<h1>Here goes story</h1>}></Route>
          </Route>
          <Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Route>
        </Routes>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default App;
