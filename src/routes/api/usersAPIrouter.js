const express = require('express');
const router = express.Router();
const path = require('path');
const usersAPIController = require(path.resolve('src/controllers/api/usersAPIControllers.js'));

//Rutas
//Listado de todos los users
router.get('/', usersAPIController.list);
//Detalle del user
router.get('/:id', usersAPIController.detail);


//Agregar un user
router.post('/create', usersAPIController.create);
//Modificar un user
router.put('/update/:id', usersAPIController.update);
//Eliminar un user
router.delete('/delete/:id', usersAPIController.destroy);

module.exports = router;