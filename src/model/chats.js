const { Schema, model, } = require('mongoose');
const mensajes = require('./mensajes');
const users = require('./users');
const chatsSchema = new Schema({
    participantes: [{
        participante: {
            type: Schema.Types.ObjectId,
            ref: "users",
            autopopulate:true
        }
    }],
    mensajes: [{
        mensajes: {
            type: Schema.Types.ObjectId,
            ref: "mensajes",
            autopopulate:true
        }
    }],
}, {
    id: true
});
chatsSchema.plugin(require('mongoose-autopopulate'));
module.exports = model("chats", chatsSchema);