const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('servidor montado');
});


app.get('/home', function(req,res) {
    res.sendFile(path.join(__dirname,'views/home.html'));
});

app.get('/register', function(req,res) {
    res.sendFile(path.join(__dirname,'views/register.html'));
});

app.get('/login', function(req,res) {
    res.sendFile(path.join(__dirname,'views/login.html'));
});

app.post('/home', function(req,res) {
    res.sendFile(path.join(__dirname,'views/home.html'));
});


