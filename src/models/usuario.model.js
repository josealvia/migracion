const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {Schema} = mongoose;

const usuarioSchema = new Schema(
    {
        nombre:{type:String},
        apellido:{type:String},
        cedula:{type:String},
        estadocivil:{type:String},
        formacion:{type:String},
        experiencia:{type:String},
        telefono: {type:String},
        direccion: {type:String},
        email:{type:String},
        password:{type:String},

    }
);
usuarioSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };

usuarioSchema.methods.validatePassword = function(password){
    return bcrypt.compare(password, this.password);
}

usuarioSchema.methods.toJSON = function(){
    let usuario = this.toObject();
    delete usuario.password;
    return usuario;
}
usuarioSchema.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Usuarios',usuarioSchema);