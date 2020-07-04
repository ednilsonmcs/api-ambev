const Usuario = require('../models/usuario');
const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const autenticacaoConfig = require('../../config/autenticacao');

const router = Router();

function gerarToken(params = {}){
  return jwt.sign(params, autenticacaoConfig.secret, {
    expiresIn: 86400,
  });

}

router.post('/autenticar', async(req, res) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({email}).select('+senha');

  if (!usuario){
    return res.status(400).send({ error: 'Usuário não encontrado!'});
  }

  if (!await bcrypt.compare(senha, usuario.senha)){
    return res.status(400).send({ error: 'Senha invalida!'});
  }

  usuario.senha = undefined;

  res.send({
    usuario,
    token: gerarToken({id: usuario.id}),
  });

});

router.post('/registrar', async(req, res) => {
  const { email } = req.body;

  try {
    if (await Usuario.findOne({ email })) {
      res.status(400).send({ error: 'Este email já está sendo usuado!' });
    }

    const usuario = await Usuario.create(req.body);
    usuario.senha = undefined;
    res.send({
      usuario,
      token: gerarToken({id: usuario.id}),
    });
  } catch (error) {
    res.status(400).send({ error: 'Erro de criação de usuário!' });
  }
});

module.exports = (app) => app.use('/autenticacao', router);
