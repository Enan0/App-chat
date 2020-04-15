const {Schema,model} = require('mongoose');
const userSchema = new Schema({
    nombre:{
        type:String
    },
    chats:[{
        chat:{
            type:Schema.Types.ObjectId,
            ref:"chats"
        }
    }]
},{
    id:true,
    timestamps:false
});

module.exports = model("users",userSchema);