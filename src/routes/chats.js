const {Router} = require('express');
const router = Router();
const {createChat,viewAllChats} = require('../controller/chats');

router.route('/')
.get(viewAllChats)
.post(createChat)

// router.route('/:id')
//     .get(readMensaje)
//     .post(sendMensaje);



module.exports = router;