import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Submenu from "./components/Submenu";

function App() {
  const imgList = ["./pic/Leap.png", "./pic/Rectangle.png"];

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
      <Header logo={imgList} menus={menus} />
      <Section />
      <Submenu submenu={submenu} />
    </div>
  );
}

export default App;
