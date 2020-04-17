const {Router} = require('express');
const router = Router();

const {createMensaje,viewAllMensajes,viewMensajesEnChat,createMensajesEnChat,getTextoChat} = require('../controller/mensajes');
router.route("/")
    .get(viewAllMensajes)
    .post(createMensaje);


router.route("/:chat")
    //Crea un mensaje dentro de un chat
    .post(createMensajesEnChat)
    //Ve los mensajes del chat
    .get(viewMensajesEnChat)

router.route('/texto/:chat')
    .get(getTextoChat)

module.exports = router;