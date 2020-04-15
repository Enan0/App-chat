const userModel = require('../model/users');

const userController = {}


userController.viewAllUsers = (req,res)=>{
    /*Muestra todos los usuarios */
    const users = await userModel.find();
    res.json(users);
}

userController.createUser = (req,res)=>{
    /*Crea un usuario */ 
    const {nombre} = req.body;
    const user = new userModel({nombre})
    user.save();
    res.json({status:"user created"})
}


module.exports = userController;