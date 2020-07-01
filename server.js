const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando a aplicação
const app = express();
      app.use(express.json());
      app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/mongodb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models');


console.log(mongoose.connection.readyState);
// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting


app.use('/api', require('./src/routes'));

app.listen(3001);
