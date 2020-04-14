const {Schema,model,} = require('mongoose');
const mensajes = require('./mensajes');
const chatsSchema = new Schema({
    participantes:[{
       nombre:String
    }],
    mensajes:[{
        mensaje:{
            type:Schema.Types.ObjectId,
            ref:"mensajes",
            autopopulate: true,
        }
    }],
});


// chatsSchema.method('getMensajes',(inst)=>{
//     return inst.find()
//     .populate("mensajes")
//     .exec();
// });

chatsSchema.method('test',function(){
    return this.populate('mensajes');
})
module.exports = model("chats",chatsSchema);