import logo from "./logo.svg";
import "./App.css";
import { ThemeContext, UserContext } from "./components/Context";
import Main from "./components/Main";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("bg-dark");
  const [user, setUser] = useState("");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div>
          <Header />
          <Main />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
