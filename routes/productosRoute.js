const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('productosView', {titulo: 'Productos'});
});

module.exports = router;