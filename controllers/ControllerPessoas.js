 const pessoas = require('../database/pessoas.json');
 
 
 const PessoasController = {

    listarPessoas:(req, res)=>{
        res.send(pessoas);
    },

    mostrarPessoas:(req, res)=>{
        
        let {id} = req.params;
        // ou let id = req.params.id; 

        let pessoaId = pessoas.find(pes => pes.id == id);

        pessoaId==undefined?res.send('Pessoa inexistente'):res.send(pessoaId);
        
    }
 }

 module.exports = PessoasController;