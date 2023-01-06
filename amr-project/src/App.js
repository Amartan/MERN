import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Submenu from "./components/Submenu";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  const imgList = {
    img1: require("../src/pic/Leap.png"),
    img2: require("../src/pic/Rectangle.png"),
  };

  const menus = [
    "PORTFOLIO",
    "BLOG",
    "CV",
    "STORE",
    "FREELANCE",
    "ABOUT ME",
    "CONTACT",
  ];

  const submenu = [
    "All",
    "UI Design",
    "UX Design",
    "Product Design",
    "Articles",
    "Tutorials",
    "News",
  ];

  return (
    <div className="App">
      <div class="container">
        <Header logo={imgList} menus={menus} />
        <Section />
        <Submenu submenu={submenu} />
        <Article />
        <Article />
        <Article />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
