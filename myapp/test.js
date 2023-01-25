const express = require("express");
const cors = require("cors");
const json = require("body-parser");
const { response } = require("express");

const port = 8080;
const app = express();

let products = [
  {id: 1, productName: "Carrot"},
  {id: 2, productName: "Tomato"},
  {id: 3, productName: "Potato"},
];

app.use(cors());
app.use(json());

app.get("/api", (request, response) => {
  response.json({message: "Welcome to API"});
});

app.get("/products", (req, res) =>{
  re
})