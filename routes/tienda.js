var express = require('express');
var router = express.Router();
const tiendaModel = require('../models/tiendaModel');


router.get('/all', async (req,res,next)=>{
    let data = await tiendaModel.getProductos()
    res.render('tienda',
    {
        message : 'Todos los productos',
        productos_array : data
    })
})

router.get('/:idProducto', async (req,res,next)=>{
    let id = req.params.idProducto;
    let data = await tiendaModel.getProducto(id);
    res.render('producto',{
        productos_array : data,
        id_p : req.params.idProducto
    })
})


module.exports = router;