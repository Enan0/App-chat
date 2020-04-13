const mensajeModel = require('../model/mensajes');
const mensajeController = {}

mensajeController.createMensaje = async(req,res)=>{
    const {texto,de,para} = req.body;
    const mensajeTmp = new mensajeModel({
        de,
        para,
        texto
    });
    await mensajeTmp.save()
    .then(res.json({succes:"mensaje enviado"}));
}

mensajeController.readMensajes = async(req,res)=>{
    const {de,para} = req.params;
    const misMensajesEnviados = await mensajeModel.find({
        de,
        para
    }) || "ninguno";
    const misMensajesRecibidos = await mensajeModel.find({
        de:para,
        para:de
    }) || "ninguno";

    res.json({
        misMensajesEnviados: misMensajesEnviados,
        misMensajesRecibidos: misMensajesRecibidos 
    });
}


module.exports = mensajeController;