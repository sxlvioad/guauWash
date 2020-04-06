var express = require('express');
var router = express.Router();
const turnosModel = require('../models/turnosModel');
const mailModel = require('../models/mailModel');

router.get('/',(req, res, next)=>{
    res.render('turno');
})

router.post('/', async (req,res,next)=>{
    let objTurno = {
        nombre : req.body.nombre,
        mail : req.body.mail,
        telefono : req.body.telefono,
        nombre_mascota : req.body.nombre_mascota,
        raza : req.body.raza,
        fecha : req.body.fecha,
    }

    let result = await turnosModel.crearTurno(objTurno);
    let respuesta = await mailModel.main(objTurno);
    
    res.render('index');

})



module.exports = router;