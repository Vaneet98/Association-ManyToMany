const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const rout = require("./routess/router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/", rout);

app.listen(port, (req, res) => {
  console.log(`listening in the port http://localhost:${port}`);
});
