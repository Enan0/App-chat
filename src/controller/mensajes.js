const mensajeModel = require('../model/mensajes');
const mensajeController = {}

mensajeController.viewAllMensajes = async (req, res) => {
    const mensajes = await mensajeModel.find();
    res.json(mensajes);
}


mensajeController.createMensaje = (req, res) => { 
    const {texto} = req.body;
    const mensaje = new mensajeModel({
        texto
    });
    mensaje.save();
    
}
module.exports = mensajeController;