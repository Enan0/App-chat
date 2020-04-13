const {Schema,model} = require('mongoose')
const mensajeSchema = new Schema({
    de:{
        type:String
    },
    para:{
        type:String
    },
    texto:{
        type:String
    }
},{
    timestamps:true
});

module.exports = model("mensajes",mensajeSchema);