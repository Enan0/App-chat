const userModel = require('../model/users');

const userController = {}


//DEV TOOL
userController.viewAllUsers = async (req, res) => {
    /*Muestra todos los usuarios */
    const users = await userModel.find();
    res.json(users);
}

userController.createUser = async (req, res) => {
    /*Crea un usuario */
    //1)Pedimos los datos 
    const { nombre } = req.body;
    //2)Creamos el usuario
    const user = new userModel({ nombre });

    //3)Lo guardamos
    user.save()
        .then(res.json({ status: "user created" }))
        .catch((err) => {
            res.json({
                status: "error",
                erro: err.message
            });
        });
}


module.exports = userController;