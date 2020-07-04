const { Router } = require('express');
const autenticacaoMiddleware = require('../middlewares/autenticacao');
const Produto = require('../models/produto');
const router = Router();

router.use(autenticacaoMiddleware);

router.post('/criar', async(req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.send(produto);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de produtos!'});
  };
});

router.get('/listar', async(req, res) => {
  try {
    const produto = await Produto.find();
    res.send(produto);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de produtos!'});
  }
});

router.get('/mostrar/:produtoId', async(req, res) => {
  try {
    const produto = await Produto.findById(req.params.produtoId);
    res.send(produto);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de produtos!'});
  }
});

router.put('/atualizar/:produtoId', async(req, res) => {
  try {
    res.send({user: req.userId});
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de produtos!'});
  }
});

router.delete('/deletar/:produtoId', async(req, res) => {
  try {
    const produto = await Produto.findByIdAndRemove(req.params.produtoId);
    res.send(produto);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de produtos!'});
  }
});

module.exports = (app) => app.use('/produtos', router);
