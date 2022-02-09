const path = require('path');

const controlador = {
    index: function(req,res) {
        res.render('home');
    }
} 

module.exports = controlador;

