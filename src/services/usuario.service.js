const {Usuarios}= require('../models');

const jwt = require('jsonwebtoken');


class UsuarioService{

   /* async signup(entity) {


        await validarUsuario();
        const usuario = new Usuarios(entity);
        usuario.password = await usuario.encrypPassword(usuario.password);
        await usuario.save();

        /*const token = jwt.sign({
            id: usuario._id
        }, config.SECRET, {
            expiresIn: 60 * 60
        });

        return {
            auth: true,
            usuario,
            token
        }
    }*/

    /*async signin(entity){
        const usuario = await Usuarios.findOne({email:entity.email});
        if(!usuario){
            const error = new Error();
            error.status = 404;
            error.message = 'Email no esta registrado';
            throw error;
        }

        const passwordIsValid = await usuario.validatePassword(entity.password);
        if(!passwordIsValid){
            const error = new Error();
            error.status = 401;
            error.auth = false;
            error.message = 'Contraseña invalida';
            throw error;
        }

        const token = jwt.sign({
            id: usuario._id
        }, config.SECRET,{
            expiresIn: 60 * 60
        });

        return {
            auth: true,
            usuario,
            token
        }
    }*/

    async getAll(){
        const usuarios = await Usuarios.find().populate('_usuario');
        return usuarios;
    }
    
    async update(id, entity){
        await Usuarios.findByIdAndUpdate(id, entity);
        return Usuarios.findById(id);
    }

    async delete(id){
        await Usuarios.deleteMany({_usuario: id});
        return await Usuarios.findByIdAndDelete(id);
    }
    
    // ******** Funciones para validar **********
   
    /*async validateUsuario(id){
        let usuario = await Usuarios.findById(id);
        /*if(!usuario){
            const error = new Error();
            error.status = 404;
            error.message = 'El usuario no existe no existe';
            throw error;
        }
    }*/
}

module.exports = new UsuarioService();
