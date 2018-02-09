const express = require('express');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');
const cors = require('cors')
const ObjectID = require('mongodb').ObjectID;

const app = express();

app.use(expressMongoDb('mongodb://localhost/appApi'));
app.use(bodyParser.json());
app.use(cors());

app.get('/estacionamentos', (req, res) => {
    req.db.collection('estacionamentos')
    .find({})
    .toArray((err, data) => {
        res.send(data);
    });
});

app.post('/estacionamentos', (req, res) => {
    console.log("insert");

    if(!req.body.nome || !req.body.endereco){
        res.status(400).send({'error': 'Nome e email são obrigatórios'});
        return;
    }

    park = {
        ne: req.body.ne,
        nome: req.body.nome,
        endereco: req.body.endereco,
        preco: req.body.preco,
        foto: req.body.foto,
        comentarios: []
      }

    req.db.collection('estacionamentos')
    .insert(park, (err, data) => {
        res.send(data);
    });
});

app.post('/update', (req, res) => {

    busca = {
        ne: Number(req.body.ne)
    }
    novoPreco = req.body.preco;
    

    req.db.collection('estacionamentos')
    .findOne(busca, (err, data) => {
        req.db.collection('estacionamentos')
        .update(busca,  {"ne": data.ne, "nome": data.nome, "endereco": data.endereco, "preco": novoPreco, "foto": data.foto, "comentarios": data.comentarios},  (err, data) => {
        
        
        });
        
        res.send(data);
    });

    
});

app.listen(3000, () => {
    console.log('Servidor rodando na 3000'); 
});