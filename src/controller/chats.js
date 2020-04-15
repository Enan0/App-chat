const chatModel = require('../model/chats')
const mensajeModel = require('../model/mensajes')
const chatController = {};

chatController.createChat = (req,res)=>{
    /* Creamos un chat */
    //1) Creamos los participantes
    const participante1 = [{nombre:"ezequiel"}];
    const participante2 = [{nombre:"juan"}]
    const participantes = participante1.concat(participante2);
    //2)Creamos el chat
    const chat = new chatModel({
        participantes:participantes,
    });
    chat.save()
    .then(res.json({status:"chat created"}));

}
//DEV TOOL
chatController.viewAllChats = async(req,res)=>{
    /*Vemos los chats */
    //1)Pedimos los chats
    const chats = await chatModel.find()
    .then(response=>{res.json(response)})
}
module.exports = chatController;