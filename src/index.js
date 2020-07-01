const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('./controller/autenticacaoController')(app);

app.get('/', (req, res) => {
  res.send({message: 'O megahack começou!!!'});
});

app.listen(3000);
