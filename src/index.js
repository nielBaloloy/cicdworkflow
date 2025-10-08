const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("App is running...");
      console.log("App is running...");
module.exports = app;
