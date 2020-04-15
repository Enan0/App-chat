const {Router} = require('express');
const router = Router();

const {createMensaje,viewAllMensajes} = require('../controller/mensajes');
router.route("/")
    .get(viewAllMensajes)
    .post(createMensaje);
module.exports = router;