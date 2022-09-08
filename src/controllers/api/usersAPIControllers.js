const path = require('path');
const db = require(path.resolve('src/models'));
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Users = db.users;

const UsersAPIController = {
    'list': async (req, res) => {
        db.users.findAll()
        .then(Users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Users.length,
                    url: 'api/Users'
                },
                data: Users
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.users.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    create: (req,res) => {
        Users
        .create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userRole_id: req.body.userRole_id,
                eMail: req.body.eMail,
                image: req.body.image,
                province: req.body.province,
                address: req.body.address,
                poc: req.body.poc,
                city: req.body.city,
                password: req.body.password,
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Users/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Users/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let userId = req.params.id;
        Users.update(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userRole_id: req.body.userRole_id,
                eMail: req.body.eMail,
                image: req.body.image,
                province: req.body.province,
                address: req.body.address,
                poc: req.body.poc,
                city: req.body.city,
                password: req.body.password,
            },
            {
                where: {id: userId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Users/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/Users/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let userId = req.params.id;
        Users
        .destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/Users/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/Users/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = UsersAPIController;