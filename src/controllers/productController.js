const fs = require('fs')
const path = require('path')

const productFilePath = path.join(__dirname,'../../data/devices.json');
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));

const controller = {
    index: (req, res) => {
        const data = products.map((product,index)=>{
            return {
                id:index+1,
                ...product
            }
        })
        res.render('productos',{products:data});
    },
    detail: (req,res) => {
        const productoDetalle = products[req.params.id-1]
        res.render('detalleProducto',{productoDetalle});
    },
    create: (req,res) =>{
        res.render('crearProducto');
    }
}; 

module.exports = controller;