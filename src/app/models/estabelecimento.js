const mongoose = require('../../database');

const EstabelecimentoSchema = new mongoose.Schema({
  descricao: {
    type: String,
    require: true,
  },
  latitude: {
    type: Number,
    require: true,
  },
  longitude: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Estabelecimento = mongoose.model('Estabelecimento', EstabelecimentoSchema);

module.exports = Estabelecimento;
