const Usuario = require("../models/usuarios.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function (req,res) {
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    usuario.save(function(err) {
        if(err){
            console.log = false,
            response.exito = false,
            response.msg= "Error al guardar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg= "El usuario se guardó con exito!"
        res.json(response)
    })
}