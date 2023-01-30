const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");
const fs = require("fs");
const { json } = require("body-parser");
const uuid = require("uuid");
const uniqueRandomID = uuid.v4();

app.use(cors());
app.unsubscribe(json());

const file = "./user.json";

app.post("/user", (req, res) => {
  const body = req.body;

  console.log(req.body);

  fs.readFile(file, "utf-8", (readErr, data) => {
    if (readErr) {
      res.json({ status: "false", message: readErr });
    }

    const obj = JSON.parse(data);

    const newUser = {
      // id: obj.user.length + 1,
      id: uniqueRandomID,
      name: "Oyu",
    };

    // obj.user.push(newUser);
    obj.push(newUser);

    fs.writeFile(file, JSON.stringify(obj), (err) => {
      if (err) {
        res.json({ status: "false", message: err });
      }
      res.json({ status: true, result: obj });
    });
  });
});

app.delete("/user", (request, response) => {
  const body = request.body;
  fs.readFile("./user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);
    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    const deletedData = savedData.filter((d) => d.id !== 7);
    fs.writeFile("./user.json", JSON.stringify(deletedData), (writeError) => {
      if (writeError) {
        response.json({
          status: "error",
        });
      }

      response.json({
        status: "success",
        data: deletedData,
      });
    });
  });
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
