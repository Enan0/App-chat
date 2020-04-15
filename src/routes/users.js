const {Router} = require('express');
const router = Router();

const {viewAllUsers,createUser} = require('../controller/users');

router.route('/')
    .post(viewAllUsers)
    .get(createUser)


module.exports = router;