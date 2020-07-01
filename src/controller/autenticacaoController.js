const Usuario = require('../models/usuario');
const { Router } = require('express');

const router = Router();

router.post('/registrar', async(req, res) => {
  const { email } = req.body;

  try {
    if (await Usuario.findOne({ email })) {
      res.status(400).send({ error: 'Este email já está sendo usuado!' });
    }

    const usuario = await Usuario.create(req.body);
    usuario.senha = undefined;
    res.send(usuario);
  } catch (error) {
    res.status(400).send({ error: 'Erro de criação de usuário!' });
  }
});

module.exports = (app) => app.use('/autenticacao', router);
