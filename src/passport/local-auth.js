const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Usuarios } = require('../models')

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await Usuarios.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await Usuarios.findOne({ email: email });
    if (user) {
        return done(null, false, req.flash('signupMessage', 'El email ya existe'));
    } else {
        const newUser = new Usuarios();
        newUser.nombre = req.body.nombre;
        newUser.apellido = req.body.apellido;
        newUser.cedula = req.body.cedula;
        newUser.estadocivil = req.body.estadocivil;
        newUser.formacion = req.body.formacion;
        newUser.experiencia = req.body.experiencia;
        newUser.telefono = req.body.telefono;
        newUser.direccion = req.body.direccion;
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
}));
passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    const user = await Usuarios.findOne({email: email});
    if(!user) {
      return done(null, false, req.flash('signinMessage', 'El usuario no está registrado'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    return done(null, user);
  }));