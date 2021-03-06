const user = require('../models/User');
const userController = {};
//crear o insertar datos de banco 
userController.store = async function (req, res, next) {
    let user = new user();
    user.nombre = req.body.user;
    user.cadena = req.body.user;
    user.anios = req.body.user;

    try{
        await user.save();
        return res.status(200).json({"message": "Datos agregados"})
    }catch(err){
        return res.status(500).json({err: err, message: "ingrese los datos bien "});
    }
}
//eliminar usuario 
userController.delete = async function(req, res, next){
    let {id} = req.params;
    await user.remove({_id:id});
    res.status(200).json({"message": "Dato eliminado"});
}

module.exports = userController;
//editar datos
userController.update = async function(req, res, next){
    let {id} = req.params;
    let user = {
        nombre: req.body.user,
        cadena: req.body.rol
    }
}
