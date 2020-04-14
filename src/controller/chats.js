const chatModel = require('../model/chats');
const mensajeModel = require('../model/mensajes');
const chatController = {};

chatController.readChats = async(req,res)=>{
    const CHATS = await chatModel.find();
    res.json(CHATS);

}


chatController.createChat = async(req,res)=>{
    const chat = new chatModel({
        participantes:[{
            nombre:"juan",
            
        },{
            nombre:"ezequiel",
        }]
    });
    await chat.save();
}

chatController.updateChat = async(idChat,mensaje)=>{
    const chat = await chatModel.findByIdAndUpdate(idChat,{mensajes:mensaje});
    console.log(mensaje._id)
    chat.save();
}

chatController.sendMessage = async(req,res)=>{
    const {texto}= req.body;
    const idChat = req.params.id; 
    var chat = await chatModel.findById(idChat);
    const mensaje = new mensajeModel({
        chat,
        texto,
    });
    await mensaje.save();
    chatController.updateChat(idChat,mensaje);
    res.json({status:"Mensaje enviado"});
}
 
chatController.readMensaje = async(req,res)=>{
    const idChat = req.params.id; 
    const chat = await chatModel.findById(idChat);
    console.log("eh?")
    const mensaje = chat.test();
    res.json({mensaje:mensaje});
}

module.exports = chatController;