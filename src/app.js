const express = require('express');
const app = express();
const path = require('path');
const rutaMain = require('./routes/home');
const rutaRegister = require('./routes/register');
const rutaLogin = require('./routes/login');


app.use(express.static('public'));

app.set('view engine','ejs');

app.set('views',__dirname + '/views');


app.listen(process.env.PORT || 3000, () => {
    console.log('servidor montado');
});


app.use('/', rutaMain);

app.use('/register', rutaRegister);

app.use('/login', rutaLogin);


app.use('*', function(req, res) {
    res.send("ruta erronea ");
});