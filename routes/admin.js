const express = require('express');
const router = express.Router()
const adminModel = require('../models/adminModel');
const noticiasModel = require('../models/tiendaModel');
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
        let prodcuto = await tiendaModel.getProducto(id);
        console.log(noticia);
        res.render('editarproducto',{productos_array : productos, idURL : id});

    } catch(error) {
        console.log(error);
        res.render('errorpage');
    }
})

router.post('/alta',upload.array('imagen',1),async(req,res,next)=> {
    try {
        var name_imagen = '';
        if(req.files[0].mimetype == 'image/jpeg' || req.files[0].mimetype == 'image/png') {
            if(req.files[0].size <= 1000000) {
                // enctype ="multipart/form-data"
                let array_mime = req.files[0].mimetype.split('/'); //image/jpeg
                let ext = array_mime[1]; // png | jpeg
                let nombre_aleatorio = uuid();
                name_imagen = nombre_aleatorio + "." + ext;
                let temporal_name = req.files[0].filename;
    

                fs.createReadStream('./uploads/'+temporal_name).pipe(fs.createWriteStream('./public/images/'+name_imagen))

                fs.unlink('./uploads/'+temporal_name,(err)=> {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("archivo temporal borrado")
                    }
                })
            } else {
                console.log("Imagen muy grande")
            }
            
        } else {
            console.log("formato incorrecto")
        }
        let objProducto = {
            nombre_producto : req.body.nombre_producto,
            categoria_producto : req.body.categoria_producto,
            descripcion_producto : req.body.descripcion_producto,
            precio_producto : req.body.precio_producto,
            // imagen : ''
            imagen : name_imagen
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
        let objProducto = await adminModel.getProductos();
        res.render('altaproducto', {productos_array : productos});
    } catch(error){
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