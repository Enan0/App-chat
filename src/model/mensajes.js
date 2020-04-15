const {Schema,model} = require('mongoose');
const chatModel = require('./chats');
const mensajeSchema = new Schema({
    usuario:{
        type:String
    },
    chat:{
        type:Schema.Types.ObjectId,
        ref: "chats"
    },
    texto:{
        type:String
    },
    fecha:{
        type:Date,
        default:Date.now
    }
},{
    id:true
});

module.exports = model("mensajes",mensajeSchema);