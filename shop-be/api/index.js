const port = 8000;
const express = require("express");
const cors = require("cors");
const app = express();

const menuRouter = require("./routes/menu.route.js");
const cateRouter = require("./routes/category.route.js");

const fs = require("fs");

app.use(cors());
app.use(express.json());

app.use("/api", menuRouter);

app.use("/api", (req, res) => {
  res.json({ message: "Welcome To My Hearth" });
});

app.listen(port, () => console.log("The hearth is beating"));
