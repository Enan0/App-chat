const {Router} = require('express');
const router = Router();


router.route('/')
    .get((req,res)=>{
        res.send('hola mensajes')
    })

module.exports = router;