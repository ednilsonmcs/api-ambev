const mongoose = require('../../database');

const ProdutoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;
