var express = require('express');
var Cliente = require('../models/cliente');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.query.cpf) return res.render('index', { cpfValidado: false, cpf: "", nome: "" });
  
  let cpf = req.query.cpf
  let nome = req.query.nome
  var cliente = new Cliente(nome, cpf)
  let cpfValidado = cliente.validarCPF()
  res.render('index', { cpfValidado: cpfValidado, cpf: cpf, nome: nome });
});

module.exports = router;
