const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/vendedora', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.static('public'));

// Definição dos modelos MongoDB
const ClienteSchema = new mongoose.Schema({
    nome: String,
    email: String
});

const ProdutoSchema = new mongoose.Schema({
    produto: String,
    quantidade: Number
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
const Produto = mongoose.model('Produto', ProdutoSchema);

// Rotas de API
app.post('/api/clientes', (req, res) => {
    const cliente = new Cliente(req.body);
    cliente.save().then(cliente => res.json(cliente));
});

app.post('/api/produtos', (req, res) => {
    const produto = new Produto(req.body);
    produto.save().then(produto => res.json(produto));
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
