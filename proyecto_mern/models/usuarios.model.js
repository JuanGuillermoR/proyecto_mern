const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    /*nombre:{Type: String, required: true, max:60},
    apellido_p:{Type: String, required: true, max:40},
    apellido_m:{Type: String, required: true, max:40},
    telefono:{Type: String, required: true, max:15},
    mail:{Type: String, required: false, max:70},
    direccion:{Type: String, required: false, max:150}*/
    nombre:{Type: String},
    apellido_p:{Type: String},
    apellido_m:{Type: String},
    telefono:{Type: String},
    mail:{Type: String},
    direccion:{Type: String}
});

module.exports = mongoose.model("usuarios", UsuariosSchema);