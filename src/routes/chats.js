const {Router} = require('express');
const router = Router();
const {createChat,viewAllChats,viewAllChatId} = require('../controller/chats');

router.route('/')
.get(viewAllChats)
.post(createChat)


router.route('/id')
.get(viewAllChatId)

// router.route('/:id')
//     .get(readMensaje)
//     .post(sendMensaje);



module.exports = router;