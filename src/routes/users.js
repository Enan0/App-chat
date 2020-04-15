const {Router} = require('express');
const router = Router();

const {viewAllUsers,createUser} = require('../controller/users');

router.route('/')
    .post(createUser)
    .get(viewAllUsers)


module.exports = router;