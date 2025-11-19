const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contactoView', {titulo: 'Contacto'});
});

module.exports = router;