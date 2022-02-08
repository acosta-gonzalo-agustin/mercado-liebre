const express = require('express');
const router = express.Router();
const rutaRegister = require('../controllers/registerController');

router.get('/',rutaRegister.register);


module.exports = router;