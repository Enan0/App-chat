const {Schema,model} = require('mongoose');
const chatModel = require('./chats');
const mensajeSchema = new Schema({
    chat:{
        type:Schema.Types.ObjectId,
        autopopulate: true,
    },
    texto:{
        type:String
    },
    fecha:{
        type:Date,
        default:Date.now
    }
});

module.exports = model("mensajes",mensajeSchema);