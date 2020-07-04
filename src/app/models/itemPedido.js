const mongoose = require('../../database');
const Produto = require('./produto');
const Pedido = require('./pedido');

const ItemPedidoSchema = new mongoose.Schema({
  pedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Pedido,
  },
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Produto,
  },
  status: {
    type: Number,
    require: true,
    default: 0,
  },
});


const ItemPedido = mongoose.model('ItemPedido', ItemPedidoSchema);

module.exports = ItemPedido;
