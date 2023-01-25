const express = require("express");
const cors = require("cors");

const port = 8080;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  const { id } = request.query;
  response.send({ status: true, result: [{ id: 1, name: "Hello" }] });
});

app.get("/add", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) + Number(b);
  response.json({ value: result });
});

app.get("/sub", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) - Number(b);
  response.json({ value: result });
});

app.get("/mult", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) * Number(b);
  response.json({ value: result });
});

app.get("/div", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) / Number(b);
  response.json({ value: result });
});

app.get("/pow", (request, response) => {
  const { a, b } = request.query;
  let result = Number(a) ** Number(b);
  response.json({ value: result });
});

app.get("/root", (request, response) => {
  const { a, b } = request.query;
  let result = Math.pow(Number(a), 1 / Number(b));
  response.json({ value: result });
});

app.get("/calc", (request, response) => {
  const { c } = request.query;
  console.log(c);
  let result = Math.Number(c);
  console.log(c);
  response.json({ value: result });
});

app.get("/api", (request, response) => {
  const { id } = request.query;
  console.log("api is running");
  response.json({ status: true });
});

app.listen(port, () => {
  console.log("server is running on " + port);
  console.log("Hello list");
});
