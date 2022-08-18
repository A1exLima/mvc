
// 1 IMPORTAR EXPRESS
const express = require('express');
const app = express();
app.set("view engine", 'ejs');

const rotaPessoas = require('./src/routers/rotaPessoas');

app.use('/pessoas', rotaPessoas);

app.listen(3000, ()=>console.log('Server running on port 3000'));