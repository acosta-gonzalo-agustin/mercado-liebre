const express = require('express');
const app = express();
const path = require('path');
const rutaMain = require('./src/routes/home');
const rutaRegister = require('./src/routes/register');
const rutaLogin = require('./src/routes/login');


app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('servidor montado');
});





app.use('/', rutaMain);

app.use('/register', rutaRegister);

app.use('/login', rutaLogin);


app.use('*', function(req, res) {
    res.send("ruta erronea ");
});