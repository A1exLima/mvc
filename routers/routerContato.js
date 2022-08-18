const express = require('express');
const router = express.Router();
const ContatoController = require('../controllers/ContatoController');

router.get('/', ContatoController.contato);

module.exports = router;  