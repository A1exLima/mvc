const express = require('express');
const app = express();
const routerContato = require('./routers/routerContato');

app.set("view engine", 'ejs');

app.use(express.static("public"))



app.use('/contato', routerContato);

app.listen(3000, ()=>console.log('Server running on port 3000'));