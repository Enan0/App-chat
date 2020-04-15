const {Schema,model} = require('mongoose');
const chatModel = require('./chats');
const mensajeSchema = new Schema({
    usuario:{
        type:String
    },
    chat:{
        type:Schema.Types.ObjectId,
        ref: "chats",
        autopopulate:true
    },
    texto:{
        type:String,
        default:""
    },
    fecha:{
        type:Date,
        default:Date.now
    }
},{
    id:true
});
mensajeSchema.plugin(require('mongoose-autopopulate'));
module.exports = model("mensajes",mensajeSchema);