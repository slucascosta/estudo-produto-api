const express = require("express");
const router = express.Router();

router.get("/testes/somar", (req, res) => {
  const numA = req.query.numA;
  const numB = req.query.numB;

  const resultado = Number(numA) + Number(numB);

  res.send(resultado.toString());
});

router.get("/testes/subtrair", (req, res) => {
  const numA = req.query.numA;
  const numB = req.query.numB;

  const resultado = Number(numA) - Number(numB);

  res.send(resultado.toString());
});

module.exports = router;