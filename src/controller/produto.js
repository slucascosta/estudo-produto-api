const express = require("express");
const { obterProdutos } = require("../repository/produto");
const router = express.Router();

router.get("/produto", (req, res) => {
  const listaDeProdutos = obterProdutos();

  res.send(listaDeProdutos);
});

router.post("/produto", (req, res) => {
  res.send("Criar produto");
});

router.put("/produto/:produtoId", (req, res) => {
  res.send("Atualizar produto: " + req.params.produtoId);
});

module.exports = router;