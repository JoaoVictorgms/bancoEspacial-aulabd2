const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.API_PORT;
const pessoaController = require('./controllers/PessoaController');



app.get('/pessoas', pessoaController.listarPessoas);
app.get('/pessoas/:id', pessoaController.buscarPessoa);
app.post('/pessoas', pessoaController.salvarPessoa);
app.delete('/pessoas/:id', pessoaController.deletarPessoa);
app.put('/pessoas/:id', pessoaController.atualizarPessoa);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})