const express = require("express");
const cors = require("cors");
const controller = require("./src/controller");

const app = express();
const port = 4000;

app.use(cors());

app.use("/", controller);

app.listen(port, () => console.log("Ouvindo na porta " + port))