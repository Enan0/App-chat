const {Schema,model} = require('mongoose');
const userSchema = new Schema({
    nombre:{
        type:String
    },
    chats:[{
        chat:{
            type:Schema.Types.ObjectId,
            ref:"chats",
            autopopulate:true
        }
    }]
},{
    id:true,
    timestamps:false
});

userSchema.plugin(require('mongoose-autopopulate'));
module.exports = model("users",userSchema);