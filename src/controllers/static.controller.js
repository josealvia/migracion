const { VacanteModel } = require('../models');

const static = {};

static.home= async (req,res)=>{
    const vacantes = await VacanteModel.find().populate('_empresa');
    console.log(vacantes)
    res.render('home',{data:vacantes})
}

static.register=(req,res)=>{
    res.render('signup')
}

static.login=(req,res)=>{
    res.render('signin')
}
static.perfil=(req, res)=>{
    res.render('perfil')
}

static.logout=(req, res, next) => {
    req.logout();
    res.redirect('/api/users');
};



module.exports = static;