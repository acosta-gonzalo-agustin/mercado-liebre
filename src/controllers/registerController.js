const path = require('path');

const controlador = {
    register: function(req,res) {
        res.render('register');
    }
} 

module.exports = controlador;