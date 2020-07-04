const mongoose = require('../../database');
const Usuario = require('./usuario');
const Estabelecimento = require('./estabelecimento');

const PedidoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Usuario,
    require: true,
  },
  estabelecimento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Estabelecimento,
    require: true,
  },
});


const Pedido = mongoose.model('Pedido', PedidoSchema);

module.exports = Pedido;
