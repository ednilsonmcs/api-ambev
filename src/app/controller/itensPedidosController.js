const { Router } = require('express');
const autenticacaoMiddleware = require('../middlewares/autenticacao');

const ItemPedido = require('../models/itemPedido');

const router = Router();

router.use(autenticacaoMiddleware);

router.post('/criar', async(req, res) => {
  try {
    res.send({message: 'Ok'});
  } catch (error) {
    res.status(400).send({ error: 'Error na controller de itens'});
  }
});

router.get('/listar', async(req, res) => {
  try {
    const itemPedido = await ItemPedido.find();
    res.send(itemPedido);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de itens!'});
  }
});

router.get('/mostrar/:itemId', async(req, res) => {
  try {
    const itemPedido = await ItemPedido.findById(req.params.itemId);
    res.send(itemPedido);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de itens!'});
  }
});

router.put('/atualizar/:itemId', async(req, res) => {
  try {
    res.send({message: 'Ok'});
  } catch (error) {
    res.status(400).send({ error: 'Error na controller de itens'});
  }
});

router.delete('/deletar/:itemId', async(req, res) => {
  try {
    const itemPedido = await ItemPedido.findByIdAndRemove(req.params.itemId);
    res.send(itemPedido);
  } catch (error) {
    res.status(400).send({error: 'Erro na controller de itens!'});
  }
});

module.exports = (app) => app.use('/itens', router);
