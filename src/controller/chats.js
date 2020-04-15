const chatModel = require('../model/chats')
const mensajeModel = require('../model/mensajes')
const userModel = require('../model/users')
const chatController = {};

chatController.createChat = async (req, res) => {
    /* Creamos un chat */
    //1) Creamos los participantes *
    const participante1 = await userModel.findOne({nombre:"ezequiel"});
    const participante2 = await userModel.findOne({nombre:"juan"});
    const participantes = [{participante:participante1},{participante:participante2}];
    // 2)Creamos el chat
    const chat = new chatModel({
        participantes: participantes
    });
    //3) Lo persistimos
    chat.save()
        .then(()=>{res.json({ status: "true" })})
        .catch((err) => {
            res.json({
                status: "error",
                erro: err.message
            });
        });
}
//DEV TOOL
chatController.viewAllChats = async (req, res) => {
    /*Vemos los chats */
    //1)Pedimos los chats
    const chats = await chatModel.find()
        .then(response => { res.json(response) })
}
module.exports = chatController;