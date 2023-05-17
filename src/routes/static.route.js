const {Router}= require('express');
const router = Router();

const {StaticController}= require('../controllers');

router.get('/', StaticController.home);
        
router.get('/registrar', StaticController.register);

router.get('/login', StaticController.login);

router.get('/logout', StaticController.logout);

module.exports= router