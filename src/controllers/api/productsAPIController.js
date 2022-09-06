const path = require('path');
const db = require('../../models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Products = db.products;

const ProductsAPIController = {
    list: async (req, res) => {
        db.Products.findAll()
        .then(Products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Products.length,
                    url: 'api/Products'
                },
                data: Products
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(Product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: Product.length,
                        url: '/api/Product/:id'
                    },
                    data: Product
                }
                res.json(respuesta);
            });
    },
    create: (req,res) => {
        Products
        .create(
            {
                id: req.body.id,
                productCategory_id: req.body.productCategory_id,
                tradeMark: req.body.tradeMark,
                model: req.body.model,
                details: req.body.details,
                imagenes: req.body.imagenes,
                dateManufactured: req.body.dateManufactured,
                stock: req.body.stock,
                price: req.body.price,
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let ProductId = req.params.id;
        Products.update(
            {
                id: req.body.id,
                productCategory_id: req.body.productCategory_id,
                tradeMark: req.body.tradeMark,
                model: req.body.model,
                details: req.body.details,
                imagenes: req.body.imagenes,
                dateManufactured: req.body.dateManufactured,
                stock: req.body.stock,
                price: req.body.price,
            },
            {
                where: {id: ProductId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/Products/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let ProductId = req.params.id;
        Products
        .destroy({where: {id: ProductId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Products/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/Products/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
};

module.exports = ProductsAPIController;