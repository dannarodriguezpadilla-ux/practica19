const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

const inicioRoute = require('./routes/inicioRoute');
const productosRoute = require('./routes/productosRoute');
const serviciosRoute = require('./routes/serviciosRoute');
const contactoRoute = require('./routes/contactoRoute');

app.use('/', inicioRoute);
app.use('/inicio', inicioRoute);
app.use('/productos', productosRoute);
app.use('/servicios', serviciosRoute);
app.use('/contacto', contactoRoute);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
