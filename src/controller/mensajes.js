const mensajeModel = require('../model/mensajes');
const mensajeController = {}

mensajeController.createMensaje = async(req,res)=>{
    /*Guardamos los datos */
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
    /*Vemos los mensajes del chat */
    
    //Obtenemos los integrantes del chat
    const {para} = req.params;
    const de = 'ezequiel';
    //Guardamos los mensajes enviados y recibidos
        const misMensajesEnviados = await mensajeModel.find({
            de,
            para
        }) || "ninguno";
        const misMensajesRecibidos = await mensajeModel.find({
            de:para,
            para:de
        }) || "ninguno";
    let mensaje = misMensajesRecibidos.concat(misMensajesEnviados);
    mensaje.sort((a,b)=>{
        if(a.createdAt < b.createdAt){
            return a;
        }else{
            return b;
        }

    })
    res.json({
        mensajes:mensaje
    });
}


module.exports = mensajeController;