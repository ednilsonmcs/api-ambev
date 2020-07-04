const { Router } = require('express');
const autenticacaoMiddleware = require('../middlewares/autenticacao');
const Estabelecimento = require('../models/estabelecimento');
const router = Router();

router.use(autenticacaoMiddleware);

router.post('/criar', async(req, res) => {
  try {
    const estabelecimento = await Estabelecimento.create(req.body);
    res.send(estabelecimento);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de estabelecimentos!'});
  }
});

router.get('/listar', async(req, res) => {
  try {
    const estabelecimento = await Estabelecimento.find();
    res.send(estabelecimento);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de estabelecimentos!'});
  }
});

router.get('/mostrar/:estabelecimentoId', async(req, res) => {
  try {
    const estabelecimento = await Estabelecimento.findById(req.params.estabelecimentoId);
    res.send(estabelecimento);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de estabelecimentos!'});
  }
});

router.put('/atualizar/:estabelecimentoId', async(req, res) => {
  try {
    res.send({user: req.userId});
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de estabelecimentos!'});
  }
});

router.delete('/deletar/:estabelecimentoId', async(req, res) => {
  try {
    const estabelecimento = await Estabelecimento.findByIdAndRemove(req.params.estabelecimentoId);
    res.send(estabelecimento);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de estabelecimentos!'});
  }
});

module.exports = (app) => app.use('/estabelecimentos', router);
