const { Router } = require('express');
const autenticacaoMiddleware = require('../middlewares/autenticacao');

const Pedido = require('../models/pedido');
const ItemPedido = require('../models/itemPedido');
const { Promise } = require('../../database');

const router = Router();

router.use(autenticacaoMiddleware);

router.post('/criar', async(req, res) => {
  try {
    const { estabelecimento, itens} = req.body;
    let pedido = await Pedido.create({user: req.userId, estabelecimento});
    pedido = {...pedido._doc, itens: itens};

    await Promise.all(itens.map(async item => {
      const itemPedido = new ItemPedido({pedido: pedido._id, ...item});
      await itemPedido.save();
      pedido.itens.push(itemPedido);
    }));

    res.send(pedido);
  } catch (error) {
    res.status(400).send({ error: 'Error na controller de pedidos'});
  }
});

router.get('/listar', async(req, res) => {
  try {
    res.send({user: req.userId});
  } catch (error) {
    res.status(400).send({ error: 'Error na controller de pedidos'});
  }
});

router.get('/mostrar/:pedidoId', async(req, res) => {
  try {
    res.send({user: req.userId});
  } catch (error) {
    res.status(400).send({ error: 'Error na controller de pedidos'});
  }
});

router.put('/atualizar/:pedidoId', async(req, res) => {
  try {
    res.send({user: req.userId});
  } catch (error) {
    res.status(400).send({ error: 'Error na controller de pedidos'});
  }
});

router.delete('/deletar/:pedidoId', async(req, res) => {
  try {
    res.send({user: req.userId});
  } catch (error) {
    res.status(400).send({ error: 'Error na controller de pedidos'});
  }
});

module.exports = (app) => app.use('/pedidos', router);
