const { VacanteService } = require('../services');
const { VacanteModel } = require('../models');

class VacanteController{
    async getAll(req, res){
        try {
            const data = await VacanteService.getAll();
            res.json({data});
        } catch (error) {
            res.json({error})
        }
    }

    async getAllByEmpresa(req, res){
        try {
            const {empresaId} = req;
            const data = await VacanteService.getAllByEmpresa(empresaId);
            res.json({data});
        } catch (error) {
            res.json({error})
        }
    }

    async get(req, res){
        try {
            const {vacanteId} = req.params;
            const {empresaId} = req;
            const data = await VacanteService.get(vacanteId, empresaId);
            res.json({data});
        } catch (error) {
            res.json({error})
        }
    }

    async addSolicitud(req, res){
        try {
            const {vacanteId} = req.body;
            const usuarioId = req.user.id;
            const vacante = await VacanteModel.findById(vacanteId);
            vacante.solicitudes.push(usuarioId);
            await vacante.save();
            res.redirect('/api/users');
        } catch (error) {
            res.json({error: "se produjo un error"});
        }
    }
    
}

module.exports = new VacanteController();