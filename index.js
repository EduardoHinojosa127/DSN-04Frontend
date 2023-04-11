const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/clientes', (req, res) => {
  res.sendFile(__dirname + '/pages/clientes.html');
});

app.get('/productos', (req, res) => {
  res.sendFile(__dirname + '/pages/productos.html');
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en http://localhost:3000');
});
