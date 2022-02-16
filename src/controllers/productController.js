const fs = require('fs');
const path = require('path');



const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controlador = {
    list: function(req,res) {
        res.render('./products/productlisting',{productos:products});
    },
    create: function(req,res) {
        res.render('./products/productCreate',{productos:products});
    },

    store: function(req,res) {
        let newproducto = {
            name: req.body.nombre,
            price:req.body.price,
            discount:req.body.descuento,
            description:req.body.description
        };

    
        products.push(newproducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
        res.redirect('/');
    }
} 

module.exports = controlador;