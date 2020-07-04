const { Router } = require('express');
const autenticacaoMiddleware = require('../middlewares/autenticacao');
const router = Router();

router.use(autenticacaoMiddleware);

router.get('/', async(req, res) => {
  res.send({ message: 'Estabelecimentos!', user: req.userId});
});

module.exports = (app) => app.use('/estabelecimentos', router);
