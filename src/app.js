const express = require('express');
const app = express();
const path = require('path');
const rutaMain = require('./routes/home');
const rutaRegister = require('./routes/register');
const rutaLogin = require('./routes/login');
const rutaProduct = require('./routes/productRoute');


app.use(express.static('public'));


//DEFINIENDO MOTOR DE PLANTILLA

app.set('view engine','ejs');

app.set('views',__dirname + '/views');


//CONFIGURANDO HTTPS

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


//MONTANDO SERVIDOR


app.listen(process.env.PORT || 3000, () => {
    console.log('servidor montado');
});
//LLAMANDO A LAS RUTAS


app.use('/', rutaMain);

app.use('/register', rutaRegister);

app.use('/login', rutaLogin);

app.use('/product', rutaProduct);


app.use('*', function(req, res) {
    res.send("ruta erronea ");
});


app.use((req, res, next) => {
    res.status(404).render('not-found');
   })
   