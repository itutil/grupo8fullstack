const { render } = require("ejs");
const fs = require("fs");
const path = require("path");
const db = require("../database/models/index");
const { validationResult } = require('express-validator');  

/* const productFilePath = path.join(__dirname, "../../data/devices.json");
const products = JSON.parse(fs.readFileSync(productFilePath, "utf-8")); */

const controller = {
  index: (req, res) => {
    /* const data = products.map((product,index)=>{
                return {
                    id:index+1,
                    ...product
                }
            })
            res.render('productos',{products:data}); */
    db.Product.findAll().then((data) => {
      console.log(data);
      res.render("productos", {products: data});
    });
  },
  detail: (req, res) => {
    /* const productoDetalle = products[req.params.id - 1];
    if(products.length<productoDetalle){
      res.status(404).render("404");
    } else{
      res.render("detalleProducto", {
      productoDetalle,
    });
  } */
    db.Product.findByPk(req.params.id)
      .then(Product =>{
        res.render('detalleProducto',{detail: Product})
      })
  },
  admin: (req, res) => { 
    db.Product.findAll()
    .then((data) => {
      console.log(data);
      res.render("adminTable", {products: data});
    });
  },
  brand: (req, res) => {
    let brand = req.params.name;

    if (
      brand.toLowerCase() == "apple" ||
      brand.toLowerCase() == "google" ||
      brand.toLowerCase() == "hp" ||
      brand.toLowerCase() == "samsung" ||
      brand.toLowerCase() == "lg" ||
      brand.toLowerCase() == "huawei" ||
      brand.toLowerCase() == "xiaomi" ||
      brand.toLowerCase() == "lenovo" ||
      brand.toLowerCase() == "toshiba"

      ) {
      db.Product.findAll({
        where: {
          tradeMark: brand,
        },
      }).then((data) => {
        if (data.length > 0) {
          res.render("productos", {
            products: data,
          });
        } else {
          res.status(404).render("404");
        }
      });
    } else {
      res.status(404).render("404");
    }
  },
  create: (req, res) => {
    res.render("crearProducto");
  },
  store: (req, res) => {

      let errors = validationResult(req)
      if(errors.isEmpty()){
        const productoNuevo = {
          tradeMark: req.body.tradeMark,
          model: req.body.model,
          details: req.body.details,
          imagenes: req.file.filename,
          dateManufactured: req.body.fechaManofactura,
          stock: req.body.stock,
          price: req.body.price,
          productCategory_id: req.body.category,
          };
          db.Product.create(productoNuevo)
           .then(Product =>{
            console.log(Product)
           res.redirect('/products');
           })
      }else{
          res.render("crearProducto", {errors: errors.array()});
      }
    },

    /* let errors = validationResult(req)

    if(errors.length >= 1){
      const productoNuevo = {
        tradeMark: req.body.tradeMark,
        model: req.body.model,
        details: req.body.details,
        imagenes: req.file.filename,
        dateManufactured: req.body.fechaManofactura,
        stock: req.body.stock,
        price: req.body.price,
        productCategory_id: req.body.category,
        };

        db.Product.create(productoNuevo)
         .then(Product =>{
          console.log(Product)
         res.redirect('/products');
         })
    }else{
        res.render("crearProducto", {errors: errors.array()});
    } */
  update: (req, res) => {
    db.Product.findByPk(req.params.id)
     .then(Product =>{
       return res.render("actualizarProducto", {product: Product});
     })
  },
  change: (req, res) => {
    
    let errors = validationResult(req)
    if(errors.isEmpty()){
      
    let imagenToUpload = ""

    if (!req.file){
      db.Product.findByPk(req.params.id)
       .then(Product =>{
        imagenToUpload = Product.imagenes
       })
    } else{
        imagenToUpload = req.file.filename
    }

    const productoActualizar = {
      tradeMark: req.body.tradeMark,
      model: req.body.model,
      details: req.body.details,
      imagenes: imagenToUpload,
      dateManufactured: req.body.fechaManofactura,
      stock: req.body.stock,
      price: req.body.price,
      productCategory_id: req.body.category,
      };
      db.Product.update(productoActualizar,{where:{id: req.params.id}})
       .then(Product =>{
        console.log(Product)
       res.redirect("/products");
       });
      }else{

        db.Product.findByPk(req.params.id)
      .then(Product =>{
       return res.render("actualizarProducto", {product: Product, errors: errors.array()});
     })
    }
  },
  
  delete: (req, res) => {
    db.Product.findByPk(req.params.id)
     .then(Product =>{
       return res.render("eliminarProducto", {product: Product});
     })
  },
  destroy: (req, res) => {

      db.Product.destroy({where:{id: req.params.id}})
       .then(Product =>{
        console.log(Product)
       res.redirect("/products");
       });
  }, 
  banned: (req, res) => {
  res.render("prohibido");
  },
  category: (req, res) => {

    let category = req.params.id
  
    db.Product.findAll({
      where: {
        productCategory_id: category,
      }})
      .then((data) => {
        if (data.length > 0) {
          res.render("productos", {
            products: data,
          });
        } else {
          res.status(404).render("404");
        }
      })
    }
};

module.exports = controller;




