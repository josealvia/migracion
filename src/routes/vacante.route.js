const {Router} = require('express');
const router = Router();
const passport = require('passport');


const {  validarRequire } = require('../middlewares')
const {VacanteController} = require('../controllers')

router.get('/all', VacanteController.getAll);

router.get('/',  VacanteController.getAllByEmpresa);

router.get('/:vacanteId', VacanteController.get);

router.post('/addSolicitud',
    isAuthenticated,
    VacanteController.addSolicitud
);

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/api/users/login')
  }

module.exports = router;