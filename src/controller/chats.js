const chatModel = require('../model/chats')
const mensajeModel = require('../model/mensajes')
const userModel = require('../model/users')
const chatController = {};

chatController.createChat = async (req, res) => {
    /* Creamos un chat */
    //1) Buscamos los participantes *
        const {nombres} = req.body; //<-Obtiene una lista de nombres del form
        const obtaniedUsers = await userModel.find(nombres); //<-busca en la db registros con los nombres

    // 2)Creamos el chat
        const chat = new chatModel();
    //Recorre la lista de usuarios obtenidos y los agrega al chat
    obtaniedUsers.map(usuario =>{
        chat.participantes.push({participante:usuario});
    });
    //3) Lo persistimos
    chat.save()
        .then(()=>{res.json({ status: "true" })})
        //Mensaje de error general
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
    .then(res.json(chats));
    
}

chatController.viewAllChatId = async (req, res) => {
    /*Consultamos solo los id de los chats*/
    //1)Pedimos los chats
    const chats = await chatModel.find();
    let onlyId = [];
    chats.forEach(chat => {
        onlyId.push(chat._id);
    });
    res.json(onlyId)
}

module.exports = chatController;