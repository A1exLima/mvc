let userData = {
   id: 1,
   name: "Alex Lima",
   fone: "11 99898-9898",
   email: "alex.lima@email.com"
}

const ContatoController = {

   contato:(req, res)=>{
        res.render('contato', userData);
   }
}

module.exports = ContatoController;