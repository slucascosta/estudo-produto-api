const express = require("express");
const controller = require("./src/controller");

const app = express();
const port = 4000;

app.use("/", controller);

app.listen(port, () => console.log("Ouvindo na porta " + port))