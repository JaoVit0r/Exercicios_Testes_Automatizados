const express = require('express');
const app = express();
const orderRouter = require('./apps/api/router/router');

console.clear();

app.use('/',orderRouter);

const PORT = 8000;

app.listen(PORT,() => {
    console.log("Servidor rodando na porta: ",PORT)
});