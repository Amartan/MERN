import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import axios from "axios";
function App() {
  const [word, setWord] = useState();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState("");
  // const [result1, setResult1] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        console.log(res.data);
        setWord(res.data.result[0].name);
      })
      .catch((err) => console.log(err));
  }, []);

  const sum = () => {
    let str = `http://localhost:8080/add?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const sub = () => {
    let str = `http://localhost:8080/sub?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const mult = () => {
    let str = `http://localhost:8080/mult?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const div = () => {
    let str = `http://localhost:8080/div?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const pow = () => {
    let str = `http://localhost:8080/pow?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const root = () => {
    let str = `http://localhost:8080/root?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const reset = () => {
    setA(0);
    setB(0);
    setResult(0);
  };

  const calc = () => {
    let str = `http://localhost:8080/calc?c=${c}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <input type={"text"} value={a} onChange={(e) => setA(e.target.value)} />
        <input type={"text"} value={b} onChange={(e) => setB(e.target.value)} />
        <button onClick={sum}>Add</button>
        <button onClick={sub}>Sub</button>
        <button onClick={mult}>Mult</button>
        <button onClick={div}>Div</button>
        <button onClick={pow}>Pow</button>
        <button onClick={root}>Root</button>
        <span>Result: {result}</span>
        <button onClick={reset}>Reset</button>
        <br />
        {word}
      </div>
      <div>
        <input type={"text"} value={c} onChange={(e) => setC(e.target.value)} />
        <button onClick={calc}>Calculate</button>
        <span>Result: {result}</span>
      </div>
    </div>
  );
}

export default App;
