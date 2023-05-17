const { VacanteModel } = require('../models')
const { validaciones } = require('../helpers');

class VacanteService{
    async getAll(){
        const vacantes = await VacanteModel.find().populate('_empresa');
        return vacantes;
    }

    //deberia ser el id de la empresa para esta seccion revisar ++++
    async getAllByEmpresa(_empresa){
        const vacantes = await VacanteModel.find({_empresa});
        return vacantes;
    }

    async get(id, _empresa){
        await validarIdVacante(id);
        const vacante = await VacanteModel.findOne({_id:id, _empresa});
        return vacante
    }

    async addSolicitud(id, idUsuario){
        console.log(id)
        console.log(idUsuario)
        const vacante = await VacanteModel.findById(id);
        if(!idUsuario){
            const error = new Error();
            error.status = 400;
            error.message = 'El id del estudiante no ha sido enviado';
            throw error;
        }
        
        vacante.solicitudes.push(idUsuario);
        await vacante.save();
    }
}

module.exports = new VacanteService();