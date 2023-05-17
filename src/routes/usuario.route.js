const {Router}= require('express');
const router = Router();
const passport = require('passport');

const {UsuarioController}= require('../controllers');


router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/api/users',
    failureRedirect: '/api/users/registrar',
    passReqToCallback: true
  })); 

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/api/users',
    failureRedirect: '/api/users/login',
    passReqToCallback: true
  }));

router.get('/mostrar', UsuarioController.getAll);

//router.post('/create',UsuarioController.create);

//router.get('/:usuarioId',UsuarioController.get);

router.put('/update/:usuarioId',UsuarioController.update);

router.delete('/eliminar/:usuarioId',UsuarioController.delete);

router.get('/perfil',isAuthenticated, UsuarioController.perfil)

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/api/users/login')
}

module.exports= router