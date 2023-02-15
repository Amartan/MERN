const { response } = require("express");
const fs = require("fs");
const { request } = require("http");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/user.json";

exports.getAll = (request, response) => {
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = JSON.parse(data);

    return response.json({ status: true, result: savedData });
  });
};

exports.get = (request, response) => {
  const { id } = request.params;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }
    const myData = JSON.parse(data);
    const savedData = myData.filter((e) => e.id == id);

    return response.json({ status: true, result: savedData });
  });
};

exports.create = (request, response) => {
  const { id, email, firstName, lastName, userType, userImg, userRank, pword } =
    request.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = data ? JSON.parse(data) : [];

    const newObj = {
      id: uuid.v4(),
      email,
      firstName,
      lastName,
      userType,
      userImg,
      userRank,
      pword,
    };

    parsedData.push(newObj);

    fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (request, response) => {
  const { id } = request.params;
  const { email, firstName, lastName, userType, userImg, userRank, pword } =
    request.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const updateData = parsedData.map((userObj) => {
      if (userObj.id == id) {
        return {
          ...userObj,
          email,
          firstName,
          lastName,
          userType,
          userImg,
          userRank,
          pword,
        };
      } else {
        return userObj;
      }
    });

    fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: updateData });
    });
  });
};

exports.delete = (request, response) => {
  const { id } = request.params;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const deletedData = parsedData.filter((e) => e.id != id);

    fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: deletedData });
    });
  });
};
