const fs = require('fs')
const path = require('path')

const productFilePath = path.join(__dirname,'../../data/devices.json');
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));

const controller = {
    index: (req, res) => {
        res.render('productos',{products});
    },
    detail: (req,res) => {
        const productoDetalle = []
        productoDetalle.push(products[req.params.id])
        res.render('detalleProducto',{products, productoDetalle});
    },
    create: (req,res) =>{
        res.render('crearProducto');
    }
}; 

module.exports = controller;