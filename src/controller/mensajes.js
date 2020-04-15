const mensajeModel = require('../model/mensajes');
const mensajeController = {}

//DEV TOOL
mensajeController.viewAllMensajes = async (req, res) => {
    /*Vemos todos los mensajes */
    const mensajes = await mensajeModel.find();
    res.json(mensajes);
}


mensajeController.createMensaje = async(req, res) => { 
    /*Crea un mensaje */
    const {texto} = req.body;
    const mensaje = new mensajeModel({
        texto
    });
    await mensaje.save()
    .then(res.json({status:"mensaje creado"}))
    .catch((err)=>{
        res.json({ERROR:err.message});
    })    
    
    
}
module.exports = mensajeController;