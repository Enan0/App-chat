const {Router} = require('express');
const router = Router();

const {createMensaje,viewAllMensajes,viewMensajesEnChat,createMensajesEeChat} = require('../controller/mensajes');
router.route("/")
    .get(viewAllMensajes)
    .post(createMensaje);


router.route("/:chat")
    //Crea un mensaje dentro de un chat
    .post(createMensajesEeChat)
    //Ve los mensajes del chat
    .get(viewMensajesEnChat)
module.exports = router;