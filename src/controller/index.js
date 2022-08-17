const express = require("express");
const produto = require("./produto");
const testes = require("./testes");

const router = express.Router();

router.use("/", produto);
router.use("/", testes);

router.use("/", (req, res) => res.send("Api funcionando"));

module.exports = router;