const { Usuarios } = require('../models');
const { UsuarioService } = require('../services');
const passport= require('passport');



class UsuarioController{

    /* async signup(req, res){
        
        try {
            await UsuarioService.signup();
            passport.authenticate('local-signup',{
                successRedirect: '/inicio',
                failureRedirect: '/login',
                passReqToCallback: true
            });
            //res.json(data);
            
        } catch (error) {
            res.json(error);
        }
    } */

    /*async signin(req, res){
        try {
            const data = await UsuarioService.signin(req.body);
            res.redirect('/inicio')
        } catch (error) {
            res.json(error)
        }
    }*/

    async getAll(req, res){
        
        try {
            const data = await UsuarioService.getAll();
            res.json(data);
            
        } catch (error) {
            res.json(error)
        }
    }

    async update(req, res){
        try { 
            const {body}= req;
            const {usuarioId} = req.params;
            const data = await UsuarioService.update(usuarioId , body);
            res.redirect('/perfil')
        } catch (error) {
            res.json(error);
        }
    }

    async delete(req, res){
        try {
            const {usuarioId} = req.params;
            const data = await UsuarioService.delete(usuarioId);
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }

    async perfil(req, res){
        //console.log(usuario)
        await res.render('perfil')
    }
    
}

module.exports = new UsuarioController();