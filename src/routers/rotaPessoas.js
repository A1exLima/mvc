const express = require('express');
const PessoasController = require('../controllers/ControllerPessoas');

const router = express.Router();

router.get('/', PessoasController.listarPessoas);
 
router.get('/:id', PessoasController.mostrarPessoas);

module.exports = router;  