const mongoose = require("mongoose");
const {Schema} = mongoose;


const vacanteSchema = new Schema({
    titulo : {
        type: String,
        required: [true, 'El titulo de la vacante es requerido']},
    descripcion : {
        type:String,
        required: [true, 'La descripcion es requerida']},
    fecha: {
        type: Date, 
        default: Date.now()},
    estado: {type: Boolean, default: true},
    _empresa:{type: Schema.Types.ObjectId,ref:'Empresas'},
    solicitudes: [Schema.Types.ObjectId],
    _estudiante:{type: Schema.Types.ObjectId, default: null}
});

module.exports = mongoose.model('Vacantes',vacanteSchema);