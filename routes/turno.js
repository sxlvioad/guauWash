var express = require('express');
var router = express.Router();
const turnosModel = require('../models/turnosModel');

router.get('/',(req, res, next)=>{
    res.render('turno');
})

router.post('/', async (req,res,next)=>{
    let objTurno = {
        nombreCliente : req.body.nombreCliente,
        mailCliente : req.body.mailCliente,
        telefono : req.body.telefono,
        nombreMascota : req.body.nombreMascota,
        raza : req.body.raza,
        fechaTurno : req.body.fechaTurno,
        horaTurno : req.body.horaTurno
    }

    let result = await turnosModel.crearTurno(objTurno);
})

module.exports = router;