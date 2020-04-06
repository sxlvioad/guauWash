const express = require('express');
const router = express.Router()
const adminModel = require('../models/adminModel');
const tiendaModel = require('../models/tiendaModel');
const multer = require('multer');
const uuid = require('node-uuid');
const fs = require('fs'); // file system
// crear un archivo .tmp dentro de la carpeta dest
const upload = multer({dest : './uploads'});
// AJAX : async javascript and xml
// observer (angular, react, vue, etc)
// async -> todas las funciones que realizan consultas
// {id : }



router.post('/editar', async(req,res,next)=> {   
    try {

        let objProducto = {
            nombre_producto : req.body.nombre_producto,
            categoria_producto : req.body.categoria_producto,
            descripcion_producto : req.body.descripcion_producto,
            precio_producto : req.body.precio_producto,
        }
        let id_p = req.body.id_p;
        let respuesta = await tiendaModel.updateProducto(objProducto,id_p);
        res.redirect('/admin');
    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.get('/editar/:id', async(req,res,next)=> {
    try {
        let id = req.params.id;
        let producto = await tiendaModel.getProducto(id);
        console.log(producto);
        res.render('editarProducto',{productos_array : producto, idURL : id});

    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.post('/alta', async(req,res,next)=> {
    try {
        let objProducto = {
            nombre_producto : req.body.nombre_producto,
            categoria_producto : req.body.categoria_producto,
            descripcion_producto : req.body.descripcion_producto,
            precio_producto : req.body.precio_producto,
            imagen: "ola"
        }
        let resultado = await adminModel.crearProducto(objProducto);
        res.redirect('/admin');
    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.get('/alta',async (req,res,next)=> {
    try {
        let objProducto = await adminModel.getProductosAdmin();
        res.render('altaProducto', {productos_array : objProducto});
    } catch(error){
        console.log(error)
        // res.render('error')
    }
})

router.get('/eliminar/:id', async(req,res,next)=> {
    try{
        let id = req.params.id;
        await adminModel.eliminarProductoPorId(id);
        res.redirect('/admin');
    } catch(error) {
        // render('error')
    }
})

router.get('/',async (req,res,next)=> {

    try {
        let data = await adminModel.getProductosAdmin();
        console.log(data);
        res.render('admin',{productos_array : data});
    } catch(error) {
        // mostrar una página de error
        res.render('error');
    }

})

module.exports = router;