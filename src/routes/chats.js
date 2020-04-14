const {Router} = require('express');
const router = Router();
const {createChat,readChats,sendMessage,readMensaje} = require('../controller/chats');

router.route('/')
.get(readChats)
.post(createChat)

router.route('/:id')
    .get(readMensaje)
    .post(sendMessage);



module.exports = router;