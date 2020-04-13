const {Router} = require('express');
const router = Router();

const {createMensaje,readMensajes} = require('../controller/mensajes');
router.route("/")
    .post(createMensaje);

router.route("/:de/:para")
    .get(readMensajes)

module.exports = router;