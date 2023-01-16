import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";

  function Car() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
    
    const updateColor = () => {
      console.log(setCar);
      setCar(a => {
        console.log(a)
        return { ...a, color: "blue" }
      });
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Blue</button>
      </>
    )
  }


export default Car;
