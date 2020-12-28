const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre:  String,
  descripcion: String
})

// Crear el modelo
const Mascota = mongoose.model('mascotas', mascotaSchema);

module.exports = Mascota;
