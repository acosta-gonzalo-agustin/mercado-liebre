const path = require('path');

const controlador = {
    login: function(req,res) {
        res.render('login');
    }
} 

module.exports = controlador;