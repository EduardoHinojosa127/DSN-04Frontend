const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/clientes', (req, res) => {
  axios.get('http://api:3000/clientes')
    .then(response => {
      const clientes = response.data;
      res.render('clientes.ejs', { clientes });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error al obtener los clientes');
    });
});

app.get('/productos', (req, res) => {
  axios.get('http://api:3000/productos')
    .then(response => {
      const productos = response.data;
      res.render('productos.ejs', { productos });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error al obtener los productos');
    });
});

app.listen(3001, () => {
  console.log('La aplicación está corriendo en http://localhost:3001');
});
