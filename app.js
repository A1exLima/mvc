const express = require('express');
const app = express();

const routerIndex = require('./routers/routerIndex');
const routerContato = require('./routers/routerContato');
const routerPessoas = require('./routers/routerPessoas');

app.set("view engine", 'ejs');
app.use(express.static("public"))

app.use('/', routerIndex);
app.use('/pessoas', routerPessoas);
app.use('/contato', routerContato);

app.listen(3000, ()=>console.log('Server running on port 3000'));